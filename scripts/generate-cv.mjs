/**
 * Prints /resume to public/Muhammad-Hassan-Rana-CV.pdf with headless Chrome.
 *
 * Usage: npm run build && npm run cv
 * Uses the production build so content placeholders are hidden.
 * Set CHROME_PATH if Chrome isn't on your PATH as `google-chrome`.
 */
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const port = 5199;
const url = `http://localhost:${port}/resume`;
const output = path.join(root, 'public', 'Muhammad-Hassan-Rana-CV.pdf');
const chrome = process.env.CHROME_PATH || 'google-chrome';

// Detached so the whole process group (npx and the next server it spawns) can be stopped together.
const server = spawn('npx', ['next', 'start', '-p', String(port)], {
  cwd: root,
  stdio: 'ignore',
  detached: true,
});

async function waitForServer(retries = 60) {
  for (let i = 0; i < retries; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(
    `Server did not start on port ${port}. Did you run "npm run build"?`
  );
}

try {
  await waitForServer();
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=5000',
      `--print-to-pdf=${output}`,
      url,
    ],
    { stdio: 'inherit' }
  );
  console.log(`CV written to ${path.relative(root, output)}`);
} finally {
  process.kill(-server.pid);
}
