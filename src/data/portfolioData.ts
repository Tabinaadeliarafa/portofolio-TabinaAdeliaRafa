import { Project, ExperienceItem, OrganizationItem, StatItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Tabina Adelia Rafa',
  nickname: 'Tabina',
  role: 'Informatics Engineering Student',
  interests: 'Data Analysis, UI/UX Design & Backend Development',
  location: 'Bekasi, Indonesia',
  university: 'Padjadjaran University',
  degree: 'Bachelor of Informatics Engineering',
  gpa: '3.19 / 4.00',
  educationPeriod: 'August 2022 – Present',
  email: 'tabinaadeliarafa2004@gmail.com',
  phone: '+62 82261552004',
  linkedin: 'https://www.linkedin.com/in/tabinaadeliarafa/',
  github: 'https://github.com/Tabinaadeliarafa',
  status: 'Open to Opportunities',
  badgeTagline: 'Data • Design • Development',
  portraitImage: '/src/assets/images/potret.jpg',
  aboutQuote: 'Curious by nature.\nTechnical by mindset.\nCreative by heart.',
  aboutDescription:
    'An active and detail-oriented Informatics Engineering student with a strong interest in UI/UX Design, Backend Development, and Data Analysis. Experienced in application, website, and game development through academic projects, internships, and organizational activities. Comfortable working independently or collaboratively, with strong responsibility, time management, communication, and attention to detail.',
};

export const APPROACH_PILLARS = [
  {
    number: '01',
    title: 'DATA',
    tagline: 'Turning raw information into insights.',
    description:
      'Transforming complex datasets and star schemas into intuitive analytical dashboards, KPI metrics, and structured dimensional warehouses for data-backed decision making.',
    colorAccent: '#647E68',
    skillsSample: ['Power BI', 'Star Schema', 'SQL', 'ETL / OLAP'],
  },
  {
    number: '02',
    title: 'DESIGN',
    tagline: 'Creating interfaces that are clear, intuitive, and meaningful.',
    description:
      'Applying user-centric Design Sprints, moodboards, low- to high-fidelity Figma prototyping, and design systems that prioritize usability and visual elegance.',
    colorAccent: '#562B08',
    skillsSample: ['Figma', 'Design Sprint', 'Wireframing', 'Design Systems'],
  },
  {
    number: '03',
    title: 'DEVELOPMENT',
    tagline: 'Building reliable digital experiences behind the interface.',
    description:
      'Architecting resilient RESTful APIs, relational databases, user authentication layers, and backend services that perform with high security and reliability.',
    colorAccent: '#182747',
    skillsSample: ['Golang', 'Laravel', 'REST APIs', 'PostgreSQL / MySQL'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Data Analyst — Internship',
    company: 'P.T Pertamina Gas Negara (Persero)',
    period: 'February 2026 – July 2026',
    type: 'Internship',
    description:
      'An internship focused on data preparation, modeling, and dashboard development using Microsoft Power BI.',
    responsibilities: [
      'Processed and transformed Excel data for analysis and reporting.',
      'Designed Star Schema data models to support efficient reporting.',
      'Built interactive Power BI dashboards and KPI reports.',
      'Ensured data accuracy and consistency throughout the reporting process.',
    ],
    tags: ['Power BI', 'Excel', 'Data Analysis', 'Star Schema', 'Data Modeling'],
  },
  {
    id: 'exp-2',
    role: 'Backend Developer — Internship',
    company: 'Bandung Polytechnic of Textile Technology',
    period: 'September 2025 – November 2025',
    type: 'Internship',
    description:
      'A hands-on internship focused on developing a Laboratory Inventory Management System using Laravel and MySQL.',
    responsibilities: [
      'Developed and maintained backend logic.',
      'Designed database schemas.',
      'Built RESTful APIs.',
      'Collaborated with frontend developers.',
      'Supported API integration.',
      'Worked on system security, performance, and data integrity.',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Backend'],
  },
  {
    id: 'exp-3',
    role: 'UI/UX Designer — Project Based Internship',
    company: 'FundEx x Rakamin Academy',
    period: 'July 2025',
    type: 'Project-Based',
    description:
      'A virtual internship focused on producing high-quality candidates through industry-standardized projects.',
    responsibilities: [
      'Redesigned the FundEx.id mobile landing page using the Design Sprint framework.',
      'Created moodboards, wireframes, a mini design system, and high-fidelity prototypes in Figma.',
      'Improved information clarity, visual readability, interaction flows, and overall user experience.',
    ],
    tags: ['Figma', 'Design Sprint', 'Wireframe', 'UI/UX', 'Prototype'],
  },
  {
    id: 'exp-4',
    role: 'Data Analytics — Mini Course',
    company: 'RevoU',
    period: 'March 2025',
    type: 'Course',
    description:
      'An intensive online program training individuals for in-demand digital analytical roles.',
    responsibilities: [
      'Data analysis and fundamental cleaning methodology.',
      'Data cleaning fundamentals and validation.',
      'Data visualization using Google Sheets.',
      'SQL fundamentals for precise relational data retrieval.',
      'Statistics for strategic decision making.',
      'AI-based analytical tools and prompt strategies.',
      'Fundamentals of data science workflows.',
      'Studied and practiced multidimensional analysis with Tableau.',
    ],
    tags: ['SQL', 'Google Sheets', 'Tableau', 'Data Analysis', 'Statistics'],
  },
];

export const ORGANIZATIONS: OrganizationItem[] = [
  {
    id: 'org-ifest-2024',
    role: 'Project Supervisor',
    organization: 'Informatics Festival (IFEST) 2024',
    period: 'June 2024 – October 2024',
    featured: true,
    description:
      'An annual national-scale competition event in the field of Informatics Engineering.',
    responsibilities: [
      'Led overall planning, execution, and delivery of a tech event with 500+ participants.',
      'Managed timeline, budgeting, and ensured project efficiency.',
      'Secured partnerships with 20+ companies and coordinated 12 expert speakers.',
      'Oversaw strategic decisions and aligned stakeholder goals.',
      'Fostered cross-functional collaboration to ensure event success.',
      'Oversaw social media strategy, resulting in 685K+ views on Instagram Reels and 1.9M+ views on TikTok.',
      'Strengthened communication and relationships with external stakeholders.',
    ],
  },
  {
    id: 'org-ifest-2023',
    role: 'Head of Public Relations',
    organization: 'Informatics Festival (IFEST) 2023',
    period: 'June 2023 – October 2023',
    description:
      'An annual event to celebrate the anniversary of the Informatics Engineering Student Association at Padjadjaran University.',
    responsibilities: [
      'Built and maintained strong relationships with external stakeholders.',
      'Coordinated partnerships with media and sponsors to support event success.',
      'Developed and executed communication strategies to enhance public image.',
      'Ensured consistent branding and positive representation of IFEST.',
      'Managed public relations efforts across multiple channels.',
    ],
  },
  {
    id: 'org-himatif',
    role: 'Staff of External Relations',
    organization: 'HIMATIF Unpad (Student Association)',
    period: 'February 2023 – December 2024',
    description:
      'Student organization under the Department of Informatics, Universitas Padjadjaran.',
    responsibilities: [
      'Executed responsibilities based on assigned roles.',
      'Managed and maintained HIMATIF’s social media and external website.',
      'Handled communication and inquiries from external parties.',
      'Built and maintained partnerships with media and external organizations.',
      'Led the execution of IFest Unpad to enhance HIMATIF’s visibility and reputation.',
      'Strengthened collaboration with external stakeholders for mutual benefit.',
      'Supervised Project Officers, providing direction and support to ensure smooth project execution.',
    ],
  },
];

export const STATS: StatItem[] = [
  { value: 500, suffix: '+', label: 'Participants', sublabel: 'National IFEST event' },
  { value: 20, suffix: '+', label: 'Company Partnerships', sublabel: 'Industry sponsors & media' },
  { value: 12, suffix: '', label: 'Expert Speakers', sublabel: 'Keynotes & tech sessions' },
  { value: 685, suffix: 'K+', label: 'Instagram Reels Views', sublabel: 'Viral campaign reach' },
  { value: 1.9, suffix: 'M+', label: 'TikTok Views', sublabel: 'Engaged social audience' },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecotrack',
    title: 'EcoTrack',
    category: 'Mobile Application / Backend Development',
    tagline: 'Smart energy & IoT usage tracking with AI insights',
    description:
      'EcoTrack is a mobile application where I contributed as a backend developer. I built RESTful APIs using Golang for email verification, device information, usage tracking, authentication, account management, and group management.',
    highlights: [
      'REST API development using Golang',
      'Email verification & device info logging',
      'Usage tracking and telemetry pipelines',
      'Secure authentication & account management',
      'CRUD group management with invitations & member roles',
      'AI Analytics & Deepseek AI integration for data usage insights',
      'End-to-end testing and production deployment',
    ],
    technologies: ['Golang', 'REST API', 'Database', 'AI Integration', 'Deepseek AI', 'PostgreSQL'],
    image: '/src/assets/images/project_ecotrack_1788869861639.jpg',
    githubUrl: 'https://github.com/Tabinaadeliarafa',
    featured: true,
    role: 'Backend Developer',
    architectureDetails: {
      overview:
        'Engineered high-concurrency REST endpoints in Golang for IoT telemetry and energy audit logging, featuring JWT token auth, relational schemas, and Deepseek AI integration to summarize user consumption patterns.',
      keyDeliverables: [
        'JWT Auth & Email Verification pipeline',
        'Device telemetry & energy usage ingestion endpoint',
        'Group management & role-based invitation system',
        'Deepseek AI analytics payload integration',
      ],
      schemaOrStack: 'Golang / Gin / GORM / PostgreSQL / Deepseek AI API',
    },
  },
  {
    id: 'imdb-warehouse',
    title: 'IMDb Film Trends Data Warehouse',
    category: 'Data Engineering / Data Warehouse',
    tagline: 'Kimball nine-step methodology & multidimensional OLAP analysis',
    description:
      'Analyzed raw IMDb Top 1000 data including ratings, genres, directors, actors, and revenue. Built a structured data warehouse using Kimball’s Nine-Step methodology to uncover industry trends and support data-driven decision-making.',
    highlights: [
      'Raw IMDb Top 1000 data extraction & normalization',
      'SSIS ETL pipeline construction & scheduling',
      'Star Schema dimensional modeling (Fact & Dimension tables)',
      'Multidimensional OLAP cube analysis',
      'Revenue, director performance & rating correlation studies',
      'Business intelligence dashboards & trend forecasting',
    ],
    technologies: ['SSIS', 'SQL', 'Data Warehouse', 'Star Schema', 'OLAP', 'Power BI'],
    image: '/src/assets/images/project_imdb_1788869878456.jpg',
    githubUrl: 'https://github.com/Tabinaadeliarafa',
    featured: true,
    role: 'Data Engineer / Analyst',
    architectureDetails: {
      overview:
        'Designed an end-to-end enterprise data warehouse architecture applying Kimball’s dimensional design principles to process raw entertainment metadata through ETL cleansing into an optimized star schema.',
      keyDeliverables: [
        'Star schema model with Dim_Movie, Dim_Director, Dim_Genre, Dim_Date, and Fact_Performance',
        'Automated SSIS pipelines for data cleaning and type coercion',
        'OLAP aggregate queries for revenue vs. rating cross-tabs',
        'Executive decision dashboards for studio release strategies',
      ],
      schemaOrStack: 'SQL Server / SSIS / Kimball Star Schema / OLAP / Power BI',
    },
  },
  {
    id: 'teraz',
    title: 'TeraZ',
    category: 'Web Application / Backend Development',
    tagline: 'Scalable boarding house search platform with full property management',
    description:
      'TeraZ is a web-based boarding house search platform built with Laravel. Developed and maintained backend features, designed database schemas, and built RESTful APIs for user management, property listings, and search functionalities.',
    highlights: [
      'Backend development with Laravel & PHP',
      'Normalized relational database design in PostgreSQL',
      'RESTful APIs for user management & property listings',
      'Multi-filter search & geolocation query functionality',
      'Role-based access control (Tenants & Boarding House Owners)',
      'Security hardening, query optimization & data integrity guarantees',
    ],
    technologies: ['Laravel', 'PHP', 'PostgreSQL', 'REST API', 'Blade / Tailwind'],
    image: '/src/assets/images/project_teraz_1788869894653.jpg',
    githubUrl: 'https://github.com/Tabinaadeliarafa',
    featured: true,
    role: 'Backend Developer',
    architectureDetails: {
      overview:
        'Crafted a secure multi-tenant rental application backend in Laravel, integrating complex filtering, room inventory locks, landlord moderation queues, and database indexes.',
      keyDeliverables: [
        'PostgreSQL schema with spatial/proximity queries for student campus housing',
        'RESTful CRUD endpoints for room availability, pricing tiers, and amenities',
        'Owner verification and tenant application workflow',
        'Input sanitization, CSRF & role-based middleware defenses',
      ],
      schemaOrStack: 'Laravel / PHP / PostgreSQL / REST API / Eloquent ORM',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Languages used across backend logic, computational scripting, and web systems.',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'C++', 'Python', 'SQL'],
    iconName: 'Code2',
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Tools, statistical methods, and frameworks for turning metrics into strategic decisions.',
    skills: [
      'Power BI',
      'Tableau',
      'Google Sheets',
      'Data Analysis',
      'Data Visualization',
      'Data Science',
      'Statistics',
      'Data Modeling',
      'Star Schema',
    ],
    iconName: 'BarChart3',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered design methodologies, interaction flows, and prototyping toolkits.',
    skills: [
      'Figma',
      'FigJam',
      'Canva',
      'UI Design',
      'UX Design',
      'Wireframing',
      'Prototyping',
      'Design Sprint',
    ],
    iconName: 'Palette',
  },
  {
    id: 'development',
    title: 'Development & Tools',
    description: 'Frameworks, backend architectures, version control, and development environments.',
    skills: [
      'Laravel',
      'REST API',
      'Backend Development',
      'Database Design',
      'GitHub',
      'Visual Studio Code',
      'PostgreSQL',
      'MySQL',
    ],
    iconName: 'Layers',
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    description: 'Core leadership, problem-solving, and cross-functional collaboration abilities.',
    skills: [
      'Problem Solving',
      'Critical Thinking',
      'Teamwork',
      'Communication',
      'Adaptability',
      'Time Management',
      'Attention to Detail',
      'Creativity',
      'Project Management',
    ],
    iconName: 'Sparkles',
  },
];
