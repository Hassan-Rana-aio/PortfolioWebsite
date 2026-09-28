import { todo } from '@/lib/todo';
import type { Project } from './types';

import traderateSignals from '../../public/images/Traderate/Traderate4.png';
import traderateCreate from '../../public/images/Traderate/Traderate3.png';
import traderatePortfolio from '../../public/images/Traderate/Traderate5.png';
import traderateEarnings from '../../public/images/Traderate/Traderate6.png';
import yotoResults from '../../public/images/yoto/yoto1.png';
import yotoSearch from '../../public/images/yoto/yotofront.png';
import yotoTable from '../../public/images/yoto/yoto2.png';
import yotoContact from '../../public/images/yoto/yoto3.png';
import yotoExt from '../../public/images/yotoExt/image.png';
import enduraDashboard from '../../public/images/Endura/Endura.png';
import enduraResearch from '../../public/images/Endura/Endura1.png';
import enduraTrends from '../../public/images/Endura/Endura2.png';
import enduraPersonas from '../../public/images/Endura/Endura3.png';
import funcsuitePanel from '../../public/images/Funcsuite/FuncsuiteImg1.png';
import funcsuiteLicense from '../../public/images/Funcsuite/FuncsuiteImg2.png';
import pharmacyDashboard from '../../public/images/MedicalStore/Med2.png';
import pharmacyAlerts from '../../public/images/MedicalStore/Med3.png';
import hipnodeFeed from '../../public/images/Hipnode/Hipnode2.png';
import hipnodeLogin from '../../public/images/Hipnode/Hipnode1.png';

export const projects: Project[] = [
  {
    slug: 'aio-website-builder',
    name: 'AIO Website Builder',
    tagline:
      'A website builder restaurants use to design, publish and run their own sites.',
    summary:
      'Production work on AIO’s restaurant website builder: editor features, the publishing flow, custom domains, SEO and analytics for live restaurant websites.',
    role: 'Senior Full Stack Engineer',
    period: 'Apr 2026 – Present',
    context: 'AIO',
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Nx monorepo',
      'Route 53',
      'GA4',
      'Search Console',
    ],
    cover: 'builder',
    gallery: [],
    links: {
      live: todo(
        'Public example of a restaurant site built with AIO (optional)'
      ),
    },
    caseStudy: {
      problem:
        'Restaurants need a website that shows their menu, catering and brand, and that they can change themselves without a developer. The builder has to let a non-technical owner edit sections safely, then turn that into a fast, indexable site on their own domain.',
      approach: [
        'Treat every editor feature as two features: how it behaves in the builder, and how it renders on the published site. A setting that looks right in the editor but breaks after publishing isn’t done.',
        'Keep changes small and move them through dev, UAT and production, fixing regressions found in squad testing before release.',
        'When a live site fails to publish or a domain doesn’t resolve, trace it end to end (editor data, publishing job, DNS) instead of patching the symptom.',
      ],
      solution: [
        'Editor features: page and section duplication, template archive, restore and delete, hyperlink and button customisation, FAQ and text customisation, and a hero carousel.',
        'Restaurant-specific sections: menu navigation and menu-item pop-ups, live menu and menu-board previews, catering pages, and an Instagram carousel section.',
        'Publishing: fixes for production publishing failures, publishing progress feedback and logging so failures can be diagnosed.',
        'Custom domains: DNS and Route 53 fixes for published sites, including wildcard-domain handling.',
        'SEO and analytics: per-site SEO titles and settings, sitemaps, Google Search Console data and GA4 loading on published sites.',
        'Quality: server-side rendering for published pages, image and video optimisation with incremental loading, cookie-consent, and accessibility landmark fixes.',
      ],
      features: [
        {
          title: 'Visual editor',
          body: 'Section-based editing with duplication, templates and per-element customisation for buttons, links and text.',
        },
        {
          title: 'Publishing flow',
          body: 'Turns an edited site into a live one, with progress feedback and logs for when something goes wrong.',
        },
        {
          title: 'Custom domains',
          body: 'Restaurants run their site on their own domain; I work on the DNS side, including wildcard edge cases.',
        },
        {
          title: 'SEO & analytics',
          body: 'SEO settings, sitemaps, Search Console and GA4 so restaurants can be found and measure traffic.',
        },
        {
          title: 'Menu experiences',
          body: 'Menu navigation, item pop-ups and menu-board previews built around how restaurants actually sell.',
        },
        {
          title: 'Production debugging',
          body: 'Tracing live issues across the editor, publishing and hosting layers, then fixing the root cause.',
        },
      ],
      results: [
        todo(
          'A result you can share publicly, e.g. number of restaurant sites published, or a specific production issue you resolved'
        ),
      ],
      diagram: 'builder',
    },
  },
  {
    slug: 'traderate',
    name: 'TradeRate',
    tagline:
      'A social trading-signals platform where analysts post signals and the community validates them.',
    summary:
      'K-Hive’s trading-signals product, built from scratch as the senior developer. It covers signal creation on live charts, a community-validated signal feed, portfolio tracking and earnings.',
    role: 'Senior Developer (built from scratch)',
    period: todo('TradeRate start and end dates'),
    context: 'K-Hive',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Binance WebSocket',
    ],
    cover: {
      src: traderateSignals,
      alt: 'TradeRate signals feed showing BTC and PEPE long signals with entry, take-profit and stop-loss prices',
    },
    gallery: [
      {
        src: traderateSignals,
        alt: 'Signals feed with trending, my signals, votes and favourites tabs',
      },
      {
        src: traderateCreate,
        alt: 'Create-signal screen with a live BTC/USDT candlestick chart, allocation and leverage controls',
      },
      {
        src: traderatePortfolio,
        alt: 'Portfolio screen with realised, unrealised and net P&L and a position’s stop-loss to take-profit range',
      },
      {
        src: traderateEarnings,
        alt: 'Earnings screen with compensation pool and distribution totals',
      },
    ],
    links: { live: todo('TradeRate live URL, if public') },
    caseStudy: {
      problem:
        'Traders following signals on social media can’t tell which ones are worth acting on. TradeRate needed a place where analysts publish structured signals (entry, take-profit, stop-loss) and the community and validators weigh in before others follow them.',
      approach: [
        'Model a signal as structured data rather than a post, so it can be priced against live market data, tracked to completion and scored.',
        'Build on live market data from the start so charts, prices and P&L reflect the real market.',
        'Keep the core loop one tap away: find a signal, act on it, track the result. App-style navigation connects rewards, signals, portfolio and account.',
      ],
      solution: [
        'Signal creation on a live candlestick chart: long/short, market orders, take-profit and stop-loss prices, trade allocation, leverage, duration and public/private visibility.',
        'A signal feed with trending, my signals, my votes and favourites, active and completed tabs, and validator and community sentiment on each signal.',
        'Portfolio tracking with realised, unrealised and net P&L, and each position shown on its stop-loss-to-take-profit range.',
        'Earnings views, a leaderboard of analysts, and rewards and referral systems.',
      ],
      features: [
        {
          title: 'Structured signals',
          body: 'Entry, take-profit, stop-loss, allocation, leverage and duration captured as data, not free text.',
        },
        {
          title: 'Community validation',
          body: 'Validators and the community vote on signals, with sentiment shown on every card.',
        },
        {
          title: 'Live market data',
          body: 'Charts and prices driven by Binance market data so signals are priced against the real market.',
        },
        {
          title: 'Portfolio & P&L',
          body: 'Realised, unrealised and net P&L with a visual range for every open position.',
        },
        {
          title: 'Leaderboard & rewards',
          body: 'Rankings of analysts plus rewards and referrals to keep people engaged.',
        },
        {
          title: 'App-style interface',
          body: 'A dense, dark trading UI with bottom navigation between the core screens.',
        },
      ],
      results: [
        todo(
          'A verifiable TradeRate outcome: launch date, status, or scope you owned (do not use the marketing stats from the landing page)'
        ),
      ],
    },
  },
  {
    slug: 'khive-paper-trading',
    name: 'K-Hive Paper-Trading Platform',
    tagline:
      'A full-stack paper-trading platform that simulates real crypto trading on live market data.',
    summary:
      'A MERN platform where users practise trading with simulated money against live Binance market data, powered by a Node.js trade engine for orders, slippage and P&L, with a React dashboard on top.',
    role: 'MERN Stack Developer',
    period: 'Jun 2025 – Sep 2025',
    context: 'K-Hive',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Binance WebSocket & REST',
    ],
    cover: 'trading-architecture',
    gallery: [],
    links: {},
    caseStudy: {
      problem:
        'New traders need somewhere to practise without risking money, and it only works if the simulation behaves like a real exchange: live prices, realistic fills and honest P&L.',
      approach: [
        'Keep all trade logic on the server, separate from the dashboard, so order handling lives in one place.',
        'Consume live market data through Binance WebSocket and REST APIs instead of mocked prices.',
        'Persist every order and fill so users can review history and the data can be used for backtesting.',
      ],
      solution: [
        'A Node.js/Express trade engine supporting market and limit orders, simulated slippage, P&L calculation and full portfolio management.',
        'A React/TypeScript dashboard with live charts, order depth, trade history and profit/loss snapshots.',
        'MongoDB storage for users, orders and trades, enabling history tracking, backtesting and real-time analytics.',
      ],
      features: [
        {
          title: 'Order types',
          body: 'Market and limit orders executed against live prices.',
        },
        {
          title: 'Realistic fills',
          body: 'Simulated slippage so results aren’t better than a real exchange would give.',
        },
        {
          title: 'Live dashboard',
          body: 'Charts, order depth and trade history updating in real time.',
        },
        {
          title: 'Portfolio & P&L',
          body: 'Positions, balances and profit/loss calculated by the engine.',
        },
      ],
      results: [
        todo(
          'Is this platform the same product as TradeRate or a separate one? Any shareable outcome?'
        ),
      ],
      diagram: 'trading-architecture',
    },
  },
  {
    slug: 'yoto',
    name: 'Yoto.ai',
    tagline:
      'AI-powered candidate search: describe who you’re looking for and get matching profiles.',
    summary:
      'A recruiting platform at QLU.ai. Users type a prompt, the platform turns it into search filters and returns matching profiles with contact details, lists and bulk export.',
    role: 'Full Stack Engineer',
    period: 'May 2024 – Jun 2025',
    context: 'QLU.ai',
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'OpenAI',
      'Stripe',
    ],
    cover: {
      src: yotoResults,
      alt: 'Yoto.ai results for a data-analyst search in the UK, with extracted job title, skill and location filters',
    },
    gallery: [
      {
        src: yotoSearch,
        alt: 'Yoto.ai prompt screen asking “Who are you looking for?”',
      },
      {
        src: yotoResults,
        alt: 'Search results with filters extracted from the prompt',
      },
      {
        src: yotoTable,
        alt: 'Profile table with names, roles, companies and locations',
      },
      { src: yotoContact, alt: 'Contact-details pop-up for a candidate' },
      { src: yotoExt, alt: 'Yoto Chrome extension panel on top of a web page' },
    ],
    links: { live: todo('Yoto.ai public URL') },
    caseStudy: {
      problem:
        'Recruiters spend a lot of time translating a job brief into search filters across platforms. Yoto lets them describe the person they want in plain language and get matching profiles back.',
      approach: [
        'Work with the AI team on turning prompts into structured filters, and on bringing profile data onto the platform.',
        'Treat performance as a feature: search results and profile pages have to load fast to be useful.',
      ],
      solution: [
        'Prompt-based search that extracts filters from a prompt and searches profiles.',
        'A Chrome extension that extracts LinkedIn profile details, plus LinkedIn invite and messaging flows.',
        'Stripe payments with payment intents, checkout sessions and webhooks.',
        'REST APIs and database work behind search, lists and exports.',
      ],
      features: [
        {
          title: 'Prompt to filters',
          body: 'Plain-language search turned into job title, skill and location filters.',
        },
        {
          title: 'Chrome extension',
          body: 'Capture profile details from LinkedIn without leaving the page.',
        },
        {
          title: 'Outreach flows',
          body: 'Send personalised LinkedIn invites and messages from the platform.',
        },
        {
          title: 'Payments',
          body: 'Stripe checkout and webhooks for subscriptions.',
        },
      ],
      results: [
        'Improved application performance by 30% through better resource loading, caching and removing redundant work.',
        'Improved search accuracy by 20%.',
        'Brought over 30,000 executive profiles onto the platform with the AI team.',
      ],
    },
  },
  {
    slug: 'endura',
    name: 'EnduraGrowth',
    tagline:
      'An AI-assisted marketing workspace for market research, personas and content planning.',
    summary:
      'Market research, trend analysis, persona generation and content planning in one dashboard, using AI APIs and Google Trends data.',
    role: todo('Your role on EnduraGrowth'),
    period: todo('EnduraGrowth dates'),
    context: todo('Client, own product or employer?'),
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'OpenAI',
      'Google Trends',
    ],
    cover: {
      src: enduraDashboard,
      alt: 'EnduraGrowth dashboard with trend, persona and content-plan counters',
    },
    gallery: [
      { src: enduraDashboard, alt: 'EnduraGrowth dashboard' },
      { src: enduraResearch, alt: 'Market research screen' },
      {
        src: enduraTrends,
        alt: 'Trend analyzer with keyword volume and competition',
      },
      { src: enduraPersonas, alt: 'Persona generator with saved personas' },
    ],
    links: {},
  },
  {
    slug: 'funcsuite',
    name: 'FuncSuite',
    tagline:
      'An Excel add-in that runs remote API functions straight from spreadsheet formulas.',
    summary:
      'Users call remote functions with =FC() formulas, manage licences and sync results in bulk, from a React task pane inside Excel.',
    role: todo('Your role on FuncSuite'),
    period: todo('FuncSuite dates'),
    context: todo('Client, own product or employer?'),
    stack: [
      'React',
      'TypeScript',
      'Office.js',
      'Redux Toolkit',
      'React Query',
      'Supabase',
    ],
    cover: {
      src: funcsuitePanel,
      alt: 'FuncSuite task pane open inside Excel',
    },
    gallery: [
      { src: funcsuitePanel, alt: 'FuncSuite task pane in Excel' },
      { src: funcsuiteLicense, alt: 'Licence activation inside the add-in' },
    ],
    links: {},
  },
  {
    slug: 'pharmacy-system',
    name: 'Pharmacy Management System',
    tagline:
      'A desktop app for pharmacy inventory, point of sale, purchasing and reporting.',
    summary:
      'An Electron + React desktop app with a Node.js/SQLite backend that works offline, with stock and expiry tracking, POS with barcode scanning, purchases and analytics.',
    role: todo('Your role on the pharmacy system'),
    period: todo('Pharmacy system dates'),
    context: todo('Client, own product or employer?'),
    stack: [
      'React',
      'TypeScript',
      'Electron',
      'Node.js',
      'Express.js',
      'SQLite',
    ],
    cover: {
      src: pharmacyDashboard,
      alt: 'Pharmacy dashboard with revenue, sales, stock and low-stock counters',
    },
    gallery: [
      { src: pharmacyDashboard, alt: 'Pharmacy dashboard' },
      { src: pharmacyAlerts, alt: 'Product expiry alerts' },
    ],
    links: {},
  },
  {
    slug: 'hipnode',
    name: 'Hipnode',
    tagline:
      'A social network for gardeners, with communities, posts, schedules and messaging.',
    summary:
      'Gardeners join communities, share updates, plan care schedules and message each other.',
    role: todo('Your role on Hipnode'),
    period: todo('Hipnode dates'),
    context: todo('Client, own product or employer?'),
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'SCSS',
    ],
    cover: {
      src: hipnodeFeed,
      alt: 'Hipnode home feed with friends, planting schedule and trending tags',
    },
    gallery: [
      { src: hipnodeFeed, alt: 'Hipnode home feed' },
      { src: hipnodeLogin, alt: 'Hipnode sign-in page' },
    ],
    links: {},
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy && !p.hidden);
export const featuredProjects = caseStudies.filter((p) =>
  ['aio-website-builder', 'traderate', 'khive-paper-trading'].includes(p.slug)
);
export const moreProjects = projects.filter(
  (p) => !p.hidden && !featuredProjects.includes(p)
);

export const getProject = (slug: string) =>
  caseStudies.find((p) => p.slug === slug);
