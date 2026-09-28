import type { Experience } from './types';

export const experience: Experience[] = [
  {
    id: 'aio',
    company: 'AIO',
    location: 'Islamabad, Pakistan',
    context:
      'AIO builds software for restaurants. I work on its website builder, the product restaurants use to design, publish and run their own websites.',
    caseStudy: 'aio-website-builder',
    stack: ['React', 'Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Nx'],
    roles: [
      {
        title: 'Senior Full Stack Engineer',
        start: 'Apr 2026',
        end: 'Present',
        bullets: [
          'Build and maintain features across the website builder: the editor restaurants use, the published websites their customers see, and the backend that connects the two.',
          'Shipped editor features including page and section duplication, template archive/restore/delete, hyperlink and button customisation, hero and Instagram carousel sections, and live menu and menu-board previews.',
          'Work on the publishing flow that turns an edited site into a live one, fixing production publishing failures and adding progress feedback and logging so issues can be traced.',
          'Handle custom-domain and DNS issues for published sites (Route 53), including wildcard-domain edge cases.',
          'Work on SEO and analytics for published sites: SEO title and settings, sitemaps, Google Search Console data and GA4 loading.',
          'Improve published-site quality: server-side rendering, image and video optimisation, removing redundant API calls, and accessibility landmark fixes.',
          'Ship through dev, UAT and production environments, fixing regressions found in squad testing and keeping SonarQube code-quality checks green.',
        ],
      },
    ],
  },
  {
    id: 'khive',
    company: 'K-Hive (Kryptohive)',
    location: 'Islamabad, Pakistan',
    context:
      'K-Hive builds trading products for the crypto market. I built TradeRate, its social trading-signals platform, from scratch.',
    caseStudy: 'traderate',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'WebSockets',
    ],
    roles: [
      {
        title: 'Senior MERN Stack Developer',
        start: 'Sep 2025',
        end: 'Apr 2026',
        bullets: [
          'Built TradeRate from scratch as the senior developer, covering signal creation, a community signal feed, portfolio tracking and earnings across a React frontend and a Node.js/Express backend.',
          'Led development of a microservices architecture, worked on trade-engine performance and mentored junior developers.',
          'Worked with cross-functional teams to improve system reliability and ship new trading features aligned with business goals.',
        ],
      },
      {
        title: 'MERN Stack Developer',
        start: 'Jun 2025',
        end: 'Sep 2025',
        bullets: [
          'Designed and built a full-stack paper-trading platform that simulates real crypto trading using live market data from Binance WebSocket and REST APIs.',
          'Wrote the trade logic in Node.js/Express: market and limit orders, simulated slippage, P&L calculation and portfolio management.',
          'Built a responsive React/TypeScript dashboard with live charts, order depth, trade history and profit/loss snapshots.',
          'Stored users and trades in MongoDB to support history, backtesting and real-time analytics.',
        ],
      },
    ],
  },
  {
    id: 'qlu',
    company: 'QLU.ai',
    location: 'Islamabad, Pakistan',
    context:
      'QLU.ai builds AI-powered recruiting tools. I worked on Yoto.ai, its candidate search platform, and the Yoto Chrome extension.',
    caseStudy: 'yoto',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Stripe',
    ],
    roles: [
      {
        title: 'Full Stack Engineer',
        start: 'May 2024',
        end: 'Jun 2025',
        bullets: [
          'Improved application performance by 30% through better resource loading, caching and removing redundant work.',
          'Worked with the AI team to bring over 30,000 executive profiles onto the platform, and improved search accuracy by 20%.',
          'Built and integrated REST APIs and managed the databases behind them.',
          'Built a Chrome extension that extracts LinkedIn profile details, plus LinkedIn invite and message flows that let users send personalised outreach from the platform.',
          'Integrated Stripe payments, including payment intents, checkout sessions and webhooks for real-time transaction updates.',
        ],
      },
    ],
  },
  {
    id: 'premed',
    company: 'PreMed.pk',
    location: 'Karachi, Pakistan',
    context:
      'PreMed.pk is an online learning platform that helps students prepare for medical entrance exams.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    roles: [
      {
        title: 'Full Stack Developer',
        start: 'Nov 2023',
        end: 'May 2024',
        bullets: [
          'Reduced page load time by 15% by refactoring code and optimising database queries.',
          'Built personalised student dashboards and the course vault page.',
          'Contributed to overall performance work that reduced server response times.',
        ],
      },
    ],
  },
  {
    id: 'interns-pakistan',
    company: 'Interns Pakistan',
    location: 'Faisalabad, Pakistan',
    context:
      'Where I started: turning design mockups into responsive websites.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
    roles: [
      {
        title: 'Frontend Developer',
        start: 'Jun 2023',
        end: 'Nov 2023',
        bullets: [
          'Turned design mockups into responsive, interactive web interfaces with the design team.',
          'Worked with HTML, CSS, JavaScript, PHP and WordPress across several client web projects.',
        ],
      },
    ],
  },
];
