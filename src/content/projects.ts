import { todo } from '@/lib/todo';
import type { Project } from './types';

import menuBoardWall from '../../public/images/MenuBoard/01-whole-menu-on-one-tv.jpg';
import menuBoardAutopilot from '../../public/images/MenuBoard/02-autopilot-three-tv-wall.jpg';
import menuBoardWizard from '../../public/images/MenuBoard/03-setup-wizard-and-import.jpg';
import menuBoardStudio from '../../public/images/MenuBoard/05-design-studio.jpg';
import menuBoardUrdu from '../../public/images/MenuBoard/06-urdu-and-emergency-messages.jpg';
import menuBoardTv from '../../public/images/MenuBoard/08-android-tv-app.jpg';
import pharmaPos from '../../public/images/PharmaFlow/02-pos-sale.jpg';
import pharmaInventory from '../../public/images/PharmaFlow/03-inventory.jpg';
import pharmaExpiry from '../../public/images/PharmaFlow/04-near-expiry.jpg';
import pharmaPriceList from '../../public/images/PharmaFlow/07-price-list.jpg';
import pharmaProfit from '../../public/images/PharmaFlow/09-profit-summary.jpg';
import pharmaBatches from '../../public/images/PharmaFlow/11-batch-wise-stock.jpg';
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
    slug: 'menu-board',
    name: 'Menu Board',
    tagline:
      'A digital menu board SaaS for restaurants: import the menu once, and every TV lays itself out and stays right.',
    summary:
      'A multi-tenant SaaS for restaurant TV menus, designed and built end to end: a React dashboard and design studio, a NestJS API and worker on PostgreSQL, live updates over MQTT and a Kotlin Android TV app.',
    role: 'Product designer and full-stack developer',
    period: '2026',
    context: 'Own product',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'MQTT',
      'Kotlin (Android TV)',
      'Claude API',
      'Playwright',
    ],
    cover: {
      src: menuBoardWall,
      alt: 'A whole restaurant menu with a deal, an Iftar countdown and a QR code on one TV',
    },
    video: {
      src: '/videos/menu-board.mp4',
      preview: '/videos/menu-board-preview.mp4',
      poster: '/videos/menu-board-poster.jpg',
      captions: '/videos/menu-board.vtt',
      duration: '1:26',
      width: 1920,
      height: 1080,
    },
    gallery: [
      {
        src: menuBoardWall,
        alt: 'A 38-dish menu with a deal, Iftar countdown and QR code, readable on one TV (demo restaurant)',
      },
      {
        src: menuBoardAutopilot,
        alt: 'Autopilot: the menu split across three TVs, sized to read from the queue',
      },
      {
        src: menuBoardWizard,
        alt: 'Setup wizard and spreadsheet import, from a menu file to a live wall',
      },
      {
        src: menuBoardStudio,
        alt: 'Design studio with the live menu, a deal, a countdown and a QR code',
      },
      {
        src: menuBoardUrdu,
        alt: 'Urdu dish names in Nastaliq and an Urdu emergency message',
      },
      {
        src: menuBoardTv,
        alt: 'The Kotlin Android TV app, which pairs with a code and starts on boot',
      },
    ],
    links: {},
    caseStudy: {
      problem:
        'Restaurants run their menu on TVs above the counter, but most signage tools give them a design canvas and a TV player. Every price change, sold-out dish or new item means someone redesigns the screens by hand, and small restaurants don’t have a designer.',
      approach: [
        'Treat the menu as the source of truth, not the screen: menu in, screens out.',
        'Let the owner describe the setup (how many TVs, how far guests stand, which look) and have a layout engine do the design work.',
        'Make the TV side real-time and offline-first, so a sold-out tap reaches the screen in seconds and a dropped connection doesn’t blank the board.',
      ],
      solution: [
        'Menu import from a spreadsheet, or from a photo of the printed menu read by a vision model through the Claude API.',
        'An autopilot layout engine that splits the menu across the screens at a readable size and recomposes them whenever the menu changes.',
        'A staff phone app to mark dishes sold out. The TV strikes them through within seconds over MQTT.',
        'A design studio with drag, snap, layers, widgets such as countdowns and QR codes, and approvals, plus schedules and offers.',
        'Built for Pakistan: Urdu dish names in Nastaliq, Sehri and Iftar countdowns, and emergency messages.',
        'Proof-of-play reports, and a Kotlin Android TV app that pairs with a code and starts on boot.',
        'Under the hood: a TypeScript monorepo with PostgreSQL row-level security for multi-tenancy, a transactional outbox and worker, Redis and an offline-first TV player.',
      ],
      features: [
        {
          title: 'Menu in, screens out',
          body: 'Import a spreadsheet or a photo of the printed menu, pick a look, and every screen is laid out for you.',
        },
        {
          title: 'Live sold-out',
          body: 'Staff tap a dish on their phone and it is struck through on the TV within seconds.',
        },
        {
          title: 'Design studio',
          body: 'A full canvas for owners who want control: layers, snapping, widgets and approvals.',
        },
        {
          title: 'Multi-tenant SaaS',
          body: 'Every restaurant isolated with PostgreSQL row-level security, behind one API.',
        },
        {
          title: 'Android TV app',
          body: 'A Kotlin app for the TV that pairs with a code and starts on boot.',
        },
        {
          title: 'Made for Pakistan',
          body: 'Urdu in Nastaliq, Sehri and Iftar countdowns, and emergency messages in Urdu.',
        },
      ],
      results: [
        'Backed by 1,300+ unit and integration tests, 11 Playwright end-to-end tests and 30 Android unit tests.',
        'In automated layout checks, a 50-dish menu fits in all 17 looks without dropping a dish.',
        'Feature-complete for a first release and tested on a full local stack. Cloud deployment is the next step.',
      ],
    },
  },
  {
    slug: 'pharmaflow',
    name: 'PharmaFlow',
    tagline:
      'A multi-tenant pharmacy ERP and POS built around batches and expiry dates, with AI document processing.',
    summary:
      'A pharmacy retail platform built end to end: keyboard-first POS, batch-level inventory, purchasing, accounting, FBR digital invoicing and an AI service, across a Node.js API, React front-ends and a Python service.',
    role: 'Full-stack developer, built end to end',
    period: 'Jun 2026 – Oct 2026',
    context: 'Own product',
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'Python (FastAPI)',
      'Claude API',
      'Playwright',
      'GitHub Actions',
    ],
    cover: {
      src: pharmaPos,
      alt: 'PharmaFlow point of sale with a cart showing the batch and expiry on every line',
    },
    video: {
      src: '/videos/pharmaflow.mp4',
      preview: '/videos/pharmaflow-preview.mp4',
      poster: '/videos/pharmaflow-poster.jpg',
      captions: '/videos/pharmaflow.vtt',
      duration: '1:26',
      width: 1920,
      height: 1080,
    },
    gallery: [
      {
        src: pharmaPos,
        alt: 'Point of sale: batch and expiry on every cart line (demo pharmacy)',
      },
      {
        src: pharmaInventory,
        alt: 'Inventory with on-hand, available, expiry and status per batch',
      },
      {
        src: pharmaExpiry,
        alt: 'Near-expiry worklist with the value at risk',
      },
      {
        src: pharmaBatches,
        alt: 'Batch-wise stock report with unit cost and total value',
      },
      {
        src: pharmaPriceList,
        alt: 'Supplier price-list import from PDF, photo, Excel or CSV',
      },
      {
        src: pharmaProfit,
        alt: 'Profit and loss summary with profit by company and category',
      },
    ],
    links: {},
    caseStudy: {
      problem:
        'Most retail software treats medicine like groceries: one price, one quantity, no batch, no expiry. A pharmacy can’t run on that. Stock lives in batches, batches expire, and a strip is not a box.',
      approach: [
        'Model the things that make a pharmacy different (batches, expiry, packs and loose pieces) first, and build everything else on top of them.',
        'Keep money server-authoritative: every total is recomputed when a sale is posted, never trusted from the browser.',
        'Define profit, expiry and settlement once in shared SQL, so no two reports can give different answers.',
      ],
      solution: [
        'A keyboard-first POS with FEFO batch allocation, parked carts and offline selling as a PWA with a queued sale store.',
        'Batch-level inventory with per-item expiry warning windows, plus near-expiry and reorder worklists.',
        'Purchasing with weighted-average costing, customer and supplier ledgers, dues and claims.',
        'FBR digital invoicing with a verification QR on every receipt, built against the published invoicing contract.',
        'A Python AI service on the Claude API: supplier price lists and invoices captured from PDFs, prescription parsing, demand forecasting and a natural-language data assistant.',
        'A super-admin console for subscriptions, per-pharmacy feature gating and activity across pharmacies.',
      ],
      features: [
        {
          title: 'Batch-aware POS',
          body: 'The till picks the batch expiring first and shows the batch and expiry on every line.',
        },
        {
          title: 'Offline selling',
          body: 'When the internet drops, the counter keeps selling and syncs when it comes back.',
        },
        {
          title: 'Expiry control',
          body: 'Warning windows set per item, so slow movers warn months ahead and fast ones weeks ahead.',
        },
        {
          title: 'AI document capture',
          body: 'A distributor’s price list or invoice becomes structured catalogue data.',
        },
        {
          title: 'One definition of profit',
          body: 'Revenue after tax and cost from the batch that sold, shared by every report.',
        },
        {
          title: 'Multi-tenant platform',
          body: 'Each pharmacy isolated, with a super-admin view for subscriptions and features.',
        },
      ],
      results: [
        '1,400+ automated tests, 100+ database tables and 10 CI/CD pipelines.',
        'A product build tested with a seeded demo pharmacy. It is not yet running with paying pharmacies.',
      ],
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
/** Featured on the home page, in this order. */
const featuredOrder = [
  'aio-website-builder',
  'menu-board',
  'pharmaflow',
  'traderate',
  'khive-paper-trading',
];
export const featuredProjects = featuredOrder
  .map((slug) => caseStudies.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));
export const moreProjects = projects.filter(
  (p) => !p.hidden && !featuredProjects.includes(p)
);

export const getProject = (slug: string) =>
  caseStudies.find((p) => p.slug === slug);
