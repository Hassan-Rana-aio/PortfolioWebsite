'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import yotofrontPic from '../../../public/images/yoto/yotofront.png';
import traderatefrontPic from '../../../public/images/Traderate/Traderatefront.png';
import TimberfrontPic from '../../../public/images/TimberCraft/TimberCraftfront.png';
import CarvillafrontPic from '../../../public/images/Carvilla/CarvillafrontPic.png';
import EndurafrontPic from '../../../public/images/Endura/Endura.png';
import yotoExtFront from '../../../public/images/yotoExt/yotoExtFront.jpeg';
import yoto1 from '../../../public/images/yoto/yoto1.png';
import yoto2 from '../../../public/images/yoto/yoto2.png';
import yoto3 from '../../../public/images/yoto/yoto3.png';
import yoto4 from '../../../public/images/yoto/yoto4.png';
import Traderate1 from '../../../public/images/Traderate/Traderate1.png';
import Traderate2 from '../../../public/images/Traderate/Traderate2.png';
import Traderate3 from '../../../public/images/Traderate/Traderate3.png';
import Traderate4 from '../../../public/images/Traderate/Traderate4.png';
import Traderate5 from '../../../public/images/Traderate/Traderate5.png';
import Traderate6 from '../../../public/images/Traderate/Traderate6.png';
import TimberCraft1 from '../../../public/images/TimberCraft/TimberCraft1.png';
import TimberCraft2 from '../../../public/images/TimberCraft/TimberCraft2.png';
import TimberCraft3 from '../../../public/images/TimberCraft/TimberCraft3.png';
import TimberCraft4 from '../../../public/images/TimberCraft/TimberCraft4.png';
import TimberCraft5 from '../../../public/images/TimberCraft/TimberCraft5.png';
import Carvilla1 from '../../../public/images/Carvilla/Carvilla1.png';
import Carvilla2 from '../../../public/images/Carvilla/Carvilla2.png';
import Carvilla3 from '../../../public/images/Carvilla/Carvilla3.png';
import Carvilla4 from '../../../public/images/Carvilla/Carvilla4.png';
import Carvilla5 from '../../../public/images/Carvilla/Carvilla5.png';
import Carvilla6 from '../../../public/images/Carvilla/Carvilla6.png';
import Endura1 from '../../../public/images/Endura/Endura1.png';
import Endura2 from '../../../public/images/Endura/Endura2.png';
import Endura3 from '../../../public/images/Endura/Endura3.png';
import Endura4 from '../../../public/images/Endura/Endura4.png';
import Endura5 from '../../../public/images/Endura/Endura5.png';
import Endura6 from '../../../public/images/Endura/Endura6.png';
import Endura7 from '../../../public/images/Endura/Endura7.png';
import Endura8 from '../../../public/images/Endura/Endura8.png';
import yotoExt1 from '../../../public/images/yotoExt/image.png';
import TimberCraftThumbnail from '../../../public/images/TimberCraft/TimberCraftThumbnail.png'
import TraderateThumbnail from '../../../public/images/Traderate/Traderatethumbnail.png'
import YotoThumbnail from "../../../public/images/yoto/Yotothumbnail.png"
import CarvillaThumbnail from "../../../public/images/Carvilla/CarvillaThumbnail.png"
import EnduraThumbnail from "../../../public/images/Endura/EnduraThumbnail.png"
import FuncsuiteThumbnail from "../../../public/images/Funcsuite/FuncsuiteThumbnail.png"
import FuncsuiteImg1 from "../../../public/images/Funcsuite/FuncsuiteImg1.png"
import FuncsuiteImg2 from "../../../public/images/Funcsuite/FuncsuiteImg2.png"
import FuncsuiteImg3 from "../../../public/images/Funcsuite/FuncsuiteImg3.png"
import FuncsuiteImg4 from "../../../public/images/Funcsuite/FuncsuiteImg4.png"
import FuncsuiteImg5 from "../../../public/images/Funcsuite/FuncsuiteImg5.png"
import FuncsuiteImg6 from "../../../public/images/Funcsuite/FuncsuiteImg6.png"
import MedThumbnail from "../../../public/images/MedicalStore/Medthumbnail.png"
import Med1 from "../../../public/images/MedicalStore/Med1.png"
import Med2 from "../../../public/images/MedicalStore/Med2.png"
import Med3 from "../../../public/images/MedicalStore/Med3.png"
import Med4 from "../../../public/images/MedicalStore/Med4.png"
import Med5 from "../../../public/images/MedicalStore/Med5.png"
import Med6 from "../../../public/images/MedicalStore/Med6.png"
import Med7 from "../../../public/images/MedicalStore/Med7.png"
import Med8 from "../../../public/images/MedicalStore/Med8.png"
import Med9 from "../../../public/images/MedicalStore/Med9.png"
import Med10 from "../../../public/images/MedicalStore/Med10.png"
import Med11 from "../../../public/images/MedicalStore/Med11.png"
import Med12 from "../../../public/images/MedicalStore/Med12.png"
import Med13 from "../../../public/images/MedicalStore/Med13.png"
import Med14 from "../../../public/images/MedicalStore/Med14.png"
import Med15 from "../../../public/images/MedicalStore/Med15.png"
import Med16 from "../../../public/images/MedicalStore/Med16.png"
import HipnodeThumbnail from "../../../public/images/Hipnode/HipnodeThumbnail.png"
import Hipnode1 from "../../../public/images/Hipnode/Hipnode1.png"
import Hipnode2 from "../../../public/images/Hipnode/Hipnode2.png"
import Hipnode3 from "../../../public/images/Hipnode/Hipnode3.png"
import Hipnode4 from "../../../public/images/Hipnode/Hipnode4.png"
import Hipnode5 from "../../../public/images/Hipnode/Hipnode5.png"
import Hipnode6 from "../../../public/images/Hipnode/Hipnode6.png"
import Hipnode7 from "../../../public/images/Hipnode/Hipnode7.png"
import Hipnode8 from "../../../public/images/Hipnode/Hipnode8.png"
import Hipnode9 from "../../../public/images/Hipnode/Hipnode9.png"
import Hipnode10 from "../../../public/images/Hipnode/Hipnode10.png"
import Hipnode11 from "../../../public/images/Hipnode/Hipnode11.png"
import Hipnode12 from "../../../public/images/Hipnode/Hipnode12.png"
import Hipnode13 from "../../../public/images/Hipnode/Hipnode13.png"

import { StaticImageData } from 'next/image';
interface Project {
  image: StaticImageData;
  title: string;
  summary: string;
  technologies: string[];
  overview: string;
  features: string[];
  images?: StaticImageData[]; // optional additional images
}

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mainImage, setMainImage] = useState<string>('');

  const cardData = [
    {
      image: YotoThumbnail,
      title: 'Yoto Application',
      summary:
        'Yoto.ai intelligently searches across data-driven profiles to surface individuals who align with your skills, values, and culture.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'PostgresSql',
        'Open AI',
      ],
      overview:
        'Yoto.ai is a smart recruitment platform that makes the hiring process fast and efficient. Through this, recruiters and HR teams can easily find the right candidates, instantly access their contact details, and organize profiles in one place. With the bulk export option, it’s also possible to download multiple profiles at once.',
      features: [
        'Smart Candidate Search – Use advanced prompts and filters to find the best candidates within seconds.',
        'Instant Contact Details – Get verified contact information instantly with profiles.',
        'Easy Profile Organization – Manage candidates with lists, tags, and categories.',
        'Bulk Export Option – Export multiple profiles in one click and add them to your hiring workflow.',
      ],
      images: [yotofrontPic, yoto1, yoto2, yoto3, yoto4],
    },
    {
      image: TraderateThumbnail,
      title: 'Trading Application',
      summary:
        'Step into the future of finance with Traderate, a smart trading platform built for precision and performance.',
      technologies: [
        'React.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Mongodb',
        'Binance Websocket',
      ],
      overview:
        'Traderate is a smart trading platform designed for both new and experienced traders. It offers real-time trading signals, copy-trading capabilities, and social features like leaderboards to help you track and follow top performers. With profile management, a reward system, and a referral program, Traderate makes it easier to trade confidently, stay informed, and benefit from the community.',
      features: [
        'Signals Creation — Generate or receive real-time trading signals based on market analysis to help you make timely and informed trading decisions.',
        'Copy Trading — Automatically replicate the trades of successful traders; follow and copy their strategies to potentially enhance your own results.',
        'Leaderboard — Browse rankings of top traders to see performance metrics, track who’s doing well, and choose who to follow or copy.',
        'Rewards System — Earn rewards or incentives based on performance, engagement, or meeting certain milestones on the platform.',
        'Referral System — Invite friends or colleagues, and benefit from bonuses or commissions when your referrals join or make trades.',
      ],
      images: [
        traderatefrontPic,
        Traderate1,
        Traderate2,
        Traderate3,
        Traderate4,
        Traderate5,
        Traderate6,
      ],
    },
    {
      image: TimberCraftThumbnail,
      title: 'TimberCraft Application',
      summary:
        'Streamline your business with Timber Craft, an all-in-one platform for portfolio and client management.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Google Calendar',
        'Google Meets',
      ],
      overview:
        'TimberCraft is an all-in-one business management platform that helps professionals and agencies organize their work seamlessly. From managing client relationships to maintaining a well-structured portfolio, TimberCraft ensures everything stays in one place. With built-in scheduling and smart reminders, it makes collaboration, planning, and client communication easier than ever.',
      features: [
        'Portfolio Management — Showcase, organize, and update your projects in a structured and visually appealing way.',
        'Client Management — Keep all client information, interactions, and history in one centralized dashboard.',
        'Schedule Meetings — Plan and manage client meetings with integrated scheduling tools.',
        'Smart Reminders — Stay on top of deadlines and appointments with automated notifications and reminders.',
      ],
      images: [
        TimberfrontPic,
        TimberCraft1,
        TimberCraft2,
        TimberCraft3,
        TimberCraft4,
        TimberCraft5,
      ],
    },
    {
      image: CarvillaThumbnail,
      title: 'Carvilla Application',
      summary:
        'Carvilla is your all-in-one car management solution. From tracking vehicle portfolios to managing clients.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Typescript',
        'Scss',
      ],
      overview:
        'Carvilla is a complete car management and dealership solution designed for businesses and individuals in the automotive space. Whether it’s buying, selling, or renting vehicles, Carvilla helps streamline every process with ease. Alongside managing customer records, it offers tools for tracking inventory, handling transactions, and ensuring smooth client interactions — all in one modern platform.',
      features: [
        'Customer Records — Maintain detailed customer profiles with history, preferences, and transactions.',
        'Buying & Selling — Simplify the vehicle buying and selling process with a smooth, well-organized workflow.',
        'Vehicle Renting — Manage short-term and long-term rental operations with ease.',
        'Inventory Management — Track available cars, update listings, and monitor stock in real time.',
        'Transaction Management — Keep records of payments, invoices, and deal history securely.',
        'Analytics & Reports — Get insights into sales performance, rental trends, and customer activity.',
      ],
      images: [
        CarvillafrontPic,
        Carvilla1,
        Carvilla2,
        Carvilla3,
        Carvilla4,
        Carvilla5,
        Carvilla6,
      ],
    },
    {
      image: EnduraThumbnail,
      title: 'Endura Application',
      summary:
        'EnduraGrowth Solutions empowers startups and SMBs with intelligent, data-driven marketing solutions.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Open Api',
        'Google Trends',
      ],
      overview:
        'Endura is an intelligent marketing solution designed to empower startups and growing businesses with data-driven insights. It combines market research, content planning, persona generation, and keyword analysis into a single streamlined platform. By turning complex data into clear strategies, Endura helps brands understand their audience, optimize campaigns, and achieve sustainable growth.',
      features: [
        'Market Research — Access actionable insights about industry trends, competitors, and target audiences.',
        'Content Planner — Organize, schedule, and align content strategies with business goals.',
        'Persona Generator — Build detailed customer personas to better understand user behavior, pain points, and motivations.',
        'Keyword Analyzer — Discover high-impact keywords to boost SEO and maximize campaign reach.',
        'Performance Tracking — Monitor campaign effectiveness with analytics and reporting tools.',
        'Collaboration Tools — Work seamlessly with your team by sharing insights, plans, and strategies in one place.',
      ],

      images: [
        EndurafrontPic,
        Endura1,
        Endura2,
        Endura3,
        Endura4,
        Endura5,
        Endura6,
        Endura7,
        Endura8,
      ],
    },
    {
      image: yotoExtFront,
      title: 'Yoto Chrome Extension',
      summary:
        'Yoto Chrome Extension helps users extract and manage candidate contact information directly from web platforms, streamlining recruitment and outreach processes.',
      technologies: [
        'React',
        'Scss',
        'Manifest V3',
        'Content Script',
        'Background script',
        'chrome api',
      ],
      overview:
        'The Yoto Chrome Extension is a powerful recruitment tool that enables users to extract, organize, and manage candidate information directly from web platforms. Designed to save time and streamline workflows, it integrates seamlessly into your browser, allowing recruiters to capture verified contact details, manage profiles, and accelerate outreach without leaving their browsing session.',
      features: [
        'One-Click Data Extraction — Instantly capture candidate profiles and contact details from supported platforms.',
        'Profile Management — Save, tag, and categorize candidate data for easy access and organization.',
        'Seamless Integration — Works directly in the browser without the need for switching between apps.',
        'Bulk Export — Download multiple candidate profiles at once and integrate them into your hiring pipeline.',
        'Search & Filter — Quickly find saved candidates using advanced filters and tags.',
        'Secure Data Handling — Ensures all captured information is stored and managed securely.',
      ],
      images: [yotoExtFront, yotofrontPic, yotoExt1],
    },
    {
      image: HipnodeThumbnail,
      title: 'Social Media Gardening app',
      summary: 'Hipnode is a social networking platform designed specifically for gardeners, enabling users to connect, share plant journeys, discover communities, and manage their gardening activities in one interactive ecosystem.',
      technologies: [
        'Nextjs',
        'Scss',
        'Typescript',
        'Nodejs',
        'Expressjs',
        'Postgresql',
      ],
      overview: 'Hipnode is an all-in-one social platform built for gardening enthusiasts to connect, collaborate, and grow together. It combines the power of social networking with smart gardening tools, allowing users to join plant communities, share updates, track their gardening schedules, and interact with fellow gardeners worldwide. With features like real-time messaging, plant tracking, and community engagement, Hipnode transforms gardening into a connected and interactive experience.',
      features: [
        'Community Building — Join and create gardening communities like GreenBuds to connect with like-minded plant lovers.',
        'Plant Tracking & Scheduling — Organize your gardening tasks with built-in schedules and plant care reminders.',
        'Social Interaction — Share updates, like posts, chat with friends, and engage with the gardening community.',
        'Real-Time Messaging — Stay connected with other gardeners through instant chat and notifications.',
        'Location Sharing — Discover and share local gardens and nearby plant enthusiasts.',
        'Activity Dashboard — Access everything from messages, alerts, and communities in a centralized interface.',
        'Profile & Network Growth — Build your gardening identity and expand your network of plant lovers.',
        'Alerts & Notifications — Get updates on plant care, messages, and community activities in real time.',
      ],
      images: [Hipnode1, Hipnode2, Hipnode3, Hipnode4, Hipnode5, Hipnode6, Hipnode7, Hipnode8, Hipnode9, Hipnode10, Hipnode11, Hipnode12, Hipnode13],
    },
     {
      image: FuncsuiteThumbnail,
      title: 'Funcsuite Excel Add-in',
     summary:
  'FUNC SUITE TOOL is an Excel Add-in that enables users to execute custom functions from remote APIs directly in Excel. It streamlines API integration, license management, and bulk data operations while providing a modern, secure, and user-friendly interface.',
technologies: [
  'React',
  'TypeScript',
  'Redux Toolkit',
  'React Query (TanStack Query)',
  'Fluent UI',
  'React Router DOM',
  'Axios',
  'Crypto-js',
  'Webpack',
  'Babel',
  'ESLint',
  'Prettier',
  'Office.js',
  'Supabase'
],
overview:
  'FUNC SUITE TOOL addresses the challenge of integrating remote API functions directly into Excel spreadsheets. Users can execute API functions using simple =FC() formulas, manage licenses, perform bulk operations, and dynamically load functions without modifying Excel files. The tool emphasizes enterprise security, seamless integration, and a modern React-based UI for improved productivity.',
features: [
  'Custom Excel Functions — Execute remote API functions directly in Excel using =FC("functionName", param1, param2, ...). Supports multiple data types, automatic type conversion, and dynamic parameter validation.',
  'License-Based Authentication — Secure license key and company ID authentication with encrypted storage, JWT-based tokens, automatic refresh, and session persistence.',
  'Dynamic Function Management — Functions loaded dynamically from API endpoints with real-time updates, metadata caching, namespace support, and versioning.',
  'Bulk Synchronization — Sync multiple Excel cells simultaneously, automatic bulk sync on workbook open, background synchronization, progress tracking, and optimized API calls.',
  'Modern User Interface — React-based dashboard with Fluent UI components, license management, function browser, search functionality, real-time execution status, responsive design, and multi-language support.',
  'Enterprise Security — Encrypted credential storage, secure API communication via HTTPS, rate limiting, timeout handling, and detailed error logging.',
  'Developer Experience — TypeScript for type safety, hot module replacement, comprehensive error handling, logging, debugging, and optimized production builds.'
],
      images: [FuncsuiteImg1, FuncsuiteImg2, FuncsuiteImg3,FuncsuiteImg4,FuncsuiteImg5,FuncsuiteImg6],
    },
      {
      image: MedThumbnail,
      title: 'Pharmacy Systems',
summary:
  'Al-Makkah Medical Store is a comprehensive, production-ready pharmacy management system designed to streamline operations for pharmacies. It integrates inventory management, POS, purchase tracking, customer management, and business analytics into a single, user-friendly desktop application.',
technologies: [
  'React',
  'TypeScript',
  'Redux Toolkit',
  'React Query (TanStack Query)',
  'React Router',
  'SCSS Modules',
  'Recharts',
  'Lucide React',
  'Axios',
  'React Toastify',
  'jsPDF & jsPDF-AutoTable',
  'html5-qrcode',
  'react-qr-code',
  'date-fns',
  'React-to-print',
  'Node.js',
  'Express.js',
  'Sequelize ORM',
  'SQLite3',
  'JWT',
  'Bcrypt',
  'Multer',
  'CORS',
  'dotenv',
  'Electron',
  'Electron Builder',
  'NSIS Installer'
],
overview:
  'Al-Makkah Medical Store is a full-stack desktop application built with Electron and React, providing pharmacies with a complete ecosystem for managing inventory, sales, purchases, customers, and analytics. The system offers offline capability, secure access control, automated inventory and purchase management, advanced reporting, and a modern, responsive interface designed to improve operational efficiency and customer service.',
features: [
  'Automated Inventory Management — Real-time stock tracking, batch-level management, expiry monitoring, low-stock alerts, and detailed inventory reports.',
  'Advanced POS System — Complete sales interface with barcode/QR scanning, cart management, multiple payment options, discount handling, and professional invoice generation.',
  'Purchase Management — Purchase order creation, supplier management, automatic stock updates, purchase history tracking, and reporting.',
  'Business Analytics & Reporting — Real-time dashboards, sales/purchase trends, top-selling products, category-wise distribution, customizable reports, profit margin calculations, and export functionality.',
  'Customer Management — Centralized customer database, purchase history tracking, spending analytics, contact management, and search/filter capabilities.',
  'Security & Access Control — JWT authentication, role-based access control (Super Admin, Admin, User), password hashing, secure API endpoints, session management, and input validation.',
  'Desktop Application — Electron-based, cross-platform desktop app with offline functionality, fast responsive UI, automated setup, and professional installer for Windows.',
  'Additional Features — QR code generation for products, barcode scanner integration, employee management, product catalog with images, sales/purchase return tracking, multi-user support, and print functionality for invoices and reports.'
],
      images: [Med1, Med2, Med3,Med4,Med5,Med6,Med7,Med8,Med9,Med10,Med11,Med12,Med13,Med14,Med15,Med16],
    },
  ];

  const openModal = (project: Project) => {
    if (!project.images) return;
    setSelectedProject(project);
    setMainImage(project.images[0].src);
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.heading}>Featured Projects</div>
      <div className={styles.subHeading}>
        Showcasing innovative solutions built for startups and enterprises,
        <br /> from trading platforms to AI applications and Chrome extensions.
      </div>

      <div className={styles.cardsGrid}>
        {cardData.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={card.image.src} alt={card.title} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSummary}>{card.summary}</p>
              <div className={styles.techList}>
                {card.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
                {card.technologies.length > 3 && (
                  <span className={styles.moreTag}>
                    +{card.technologies.length - 3} more
                  </span>
                )}
              </div>
              <button
                className={styles.viewBtn}
                onClick={() => openModal(card)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalContent}>
              {/* Left - Details */}
              <div className={styles.modalLeft}>
                <h2>{selectedProject.title}</h2>
                {selectedProject.overview && (
                  <>
                    <h3 className={styles.subSectionTitle}>Overview</h3>
                    <p>{selectedProject.overview}</p>
                  </>
                )}

                <ul>
                  {selectedProject.technologies.map(
                    (tech: string, i: number) => (
                      <li key={i}>{tech}</li>
                    )
                  )}
                </ul>
                {/* Features Section */}
                {selectedProject.features && (
                  <>
                    <h3 className={styles.subSectionTitle}>Key Features</h3>
                    <ul className={styles.featureList}>
                      {selectedProject.features.map(
                        (feature: string, i: number) => (
                          <li key={i}>{feature}</li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </div>
              {/* Right - Images */}
              <div className={styles.modalRight}>
                <img className={styles.mainImage} src={mainImage} alt="main" />
                <div className={styles.thumbnailContainer}>
                  {selectedProject.images &&
                    selectedProject.images.map(
                      (img: StaticImageData, i: number) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={`thumb-${i}`}
                          className={`${styles.thumbnail} ${mainImage === img.src ? styles.activeThumbnail : ''}`}
                          onClick={() => setMainImage(img.src)}
                        />
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
