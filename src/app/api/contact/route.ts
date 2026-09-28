import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort, per-instance rate limit. Enough to stop casual abuse of the form.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (clean(data.website, 200)) {
    return NextResponse.json({ message: 'Message sent.' });
  }

  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const reason = clean(data.reason, 100);
  const message = clean(data.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Please fill in your name, email and message.' },
      { status: 400 }
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: 'Too many messages. Please try again later.' },
      { status: 429 }
    );
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Contact form: EMAIL_USER / EMAIL_PASS are not configured.');
    return NextResponse.json(
      { message: 'The contact form is not configured yet.' },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio: ${reason || 'New message'} | ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nAbout: ${reason || 'Not specified'}\n\n${message}`,
    });

    return NextResponse.json({ message: 'Message sent.' });
  } catch (error) {
    console.error('Contact form send failed:', error);
    return NextResponse.json(
      { message: 'Your message couldn’t be sent.' },
      { status: 500 }
    );
  }
}
