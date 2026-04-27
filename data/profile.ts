/**
 * Portfolio copy aligned with public/resume/My CV.pdf — update when your CV changes.
 */

export const profile = {
  name: "Muhammad Mohsin Saleem",
  title: "Full Stack & Blockchain Developer",
  /** PDF “ABOUT ME” — condensed for meta */
  metaDescription:
    "Full Stack & Blockchain Developer (3+ yrs). React, Next.js, Node, React Native, MongoDB, PostgreSQL. Solidity, EVM, Algorand. AAM TECH HUB · Octaloop · Telgates. BS Software Engineering, COMSATS Vehari.",
  /** Hero ribbon */
  currentBadge: "Full Stack / Blockchain Engineer · AAM TECH HUB",
  /** Hero paragraph — from CV About Me */
  heroSummary:
    "Results-driven full stack developer with 3+ years building scalable web, mobile, and blockchain applications — secure backends, responsive UIs, REST APIs, and smart contract integration. React, Next.js, Node, Express, MongoDB, PostgreSQL, React Native, Solidity, and multi-chain experience.",
  about: {
    intro:
      "I'm Muhammad Mohsin Saleem, a full stack and blockchain engineer with a B.S. in Software Engineering from COMSATS University Islamabad (Vehari Campus). I ship end-to-end products: from MERN-style backends and dashboards to wallet flows, token systems, and on-chain marketplaces.",
    mid:
      "At AAM TECH HUB (Multan) I build web and mobile apps for digital asset management with React, React Native, and integrated APIs. Previously at Octaloop (Islamabad) I worked on DApps and NFT marketplace features with secure wallet connections. At Telgates (Lahore) I delivered full stack MERN apps, staking and vesting contracts, NFT platforms, and admin portals.",
    close:
      "My stack includes React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, React Native, and blockchain tooling (Solidity, Hardhat, Foundry, Web3/Ethers, Algorand). I care about clean architecture, security, and performance. Certifications: Coursera Blockchain Specialization, Udemy Software Testing, Althash University (Blockchain Engineer).",
  },
  stats: [
    { value: "3+", label: "Years exp." },
    { value: "Web · Mobile · Chain", label: "Delivery" },
    { value: "BS SE", label: "COMSATS" },
  ] as const,
  footerTagline:
    "Full stack & blockchain — web, mobile, APIs, and smart contracts from concept to deployment.",
  contact: {
    email: "mohsinsaleemvr@gmail.com",
    phoneDisplay: "(+92) 3030547884",
    phoneTel: "+923030547884",
    whatsappTel: "+923030547884",
    whatsappWa: "https://wa.me/923030547884",
    location: "Sector D-12 Street 135, Islamabad, Pakistan",
    linkedin: "https://www.linkedin.com/in/muhammad-mohsin-saleem-745b22267/",
    github: "https://github.com/mohsinkhan045",
  },
  experience: [
    {
      role: "Full Stack / Blockchain Engineer",
      company: "AAM TECH HUB",
      location: "Multan, Pakistan",
      period: "May 2025 – Present",
    },
    {
      role: "Full Stack / Blockchain Developer",
      company: "Octaloop Technologies",
      location: "Islamabad, Pakistan",
      period: "Dec 2024 – Apr 2025",
    },
    {
      role: "Blockchain Engineer",
      company: "Telgates Inc.",
      location: "Lahore, Pakistan",
      period: "Jan 2023 – Nov 2024",
    },
  ],
  education: {
    degree: "B.S. Software Engineering",
    school: "COMSATS University Islamabad, Vehari Campus",
    period: "Sep 2020 – Sep 2024",
    location: "Vehari, Pakistan",
  },
  /** Full resume sections — mirrors My CV.pdf */
  resume: {
    aboutMe:
      "Results-driven Full Stack Developer with 3+ years of professional experience in designing, developing, and deploying scalable web, mobile, and blockchain-based applications. Skilled in secure backend systems, responsive frontends, REST APIs, database architecture, and smart contract integration. Experienced with React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, React Native, and modern JavaScript frameworks. Strong focus on clean code, security, and scalability.",
    jobs: [
      {
        title: "Full Stack / Blockchain Engineer",
        company: "AAM TECH HUB",
        period: "07 May 2025 – Present",
        location: "Multan, Pakistan",
        bullets: [
          "Developed secure web and mobile applications for digital asset management.",
          "Built responsive user interfaces using React.js and React Native.",
          "Integrated backend APIs and real-time data synchronization.",
          "Designed token payment flows and wallet management systems.",
          "Improved application performance, usability, and transaction reliability.",
          "Collaborated with development teams on scalable product architecture.",
        ],
      },
      {
        title: "Full Stack / Blockchain Developer",
        company: "Octaloop Technologies",
        period: "03 Dec 2024 – 28 Apr 2025",
        location: "Islamabad, Pakistan",
        bullets: [
          "Developed modern web applications with React.js, Next.js, and Node.js.",
          "Built decentralized applications and NFT marketplace solutions.",
          "Integrated secure wallet connections and blockchain transactions.",
          "Optimized backend services and smart contract workflows.",
          "Worked on database management and API development.",
        ],
      },
      {
        title: "Blockchain Engineer",
        company: "Telgates Inc.",
        period: "05 Jan 2023 – 10 Nov 2024",
        location: "Lahore, Pakistan",
        bullets: [
          "Built complete full stack applications using MERN technologies.",
          "Developed smart contracts for staking, vesting, and token systems.",
          "Created NFT marketplace platforms with secure transaction logic.",
          "Developed admin dashboards and user portals.",
          "Integrated third-party APIs, wallets, and payment solutions.",
          "Improved frontend responsiveness and backend scalability.",
        ],
        companyUrl: "https://telgates.net",
      },
    ],
    keyProjects: [
      {
        title: "Portfolio & business websites",
        description:
          "Responsive business and portfolio sites with React.js and Next.js and modern UI/UX.",
      },
      {
        title: "E-commerce solutions",
        description:
          "Full-featured e-commerce with product management, authentication, payments, and dashboards.",
      },
      {
        title: "NFT marketplace",
        description:
          "Decentralized marketplace with minting, bidding, and wallet integration.",
      },
      {
        title: "Wallet application",
        description:
          "Mobile wallet app with React Native — balance tracking and secure asset management.",
      },
      {
        title: "Admin dashboard systems",
        description:
          "Analytics dashboards with user management, reports, and role-based access control.",
      },
    ],
    educationDetailed: [
      {
        title: "B.S. Software Engineering",
        institution: "COMSATS University Islamabad, Vehari Campus",
        period: "Sep 2020 – Sep 2024",
        location: "Vehari, Pakistan",
      },
      {
        title: "FSc (Pre-Engineering)",
        institution: "Govt. Post Graduate College Vehari",
        period: "Jul 2018 – Sep 2020",
        location: "Vehari, Pakistan",
      },
      {
        title: "Matriculation (Science)",
        institution: "Govt. Model Higher Secondary School Vehari",
        period: "Mar 2016 – Jul 2018",
        location: "Vehari, Pakistan",
      },
    ],
    certifications: [
      {
        title: "Become a Software Tester",
        issuer: "Udemy",
        period: "May 2024 – Jun 2024",
      },
      {
        title: "Blockchain Specialization",
        issuer: "Coursera",
        period: "Aug 2023 – Nov 2023",
      },
      {
        title: "Blockchain Engineer",
        issuer: "Althash University, Chicago",
        period: "Jan 2023 – Mar 2023",
        url: "https://www.althash.university",
      },
    ],
    softSkills: [
      "Multitasking",
      "Problem-solving",
      "Teamwork",
      "Attention to detail",
      "Time management",
      "Adaptability",
    ],
  },
} as const;
