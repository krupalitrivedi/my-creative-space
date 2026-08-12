/**
 * Site content. The wording here is the copy from the Ahrefs-style portfolio
 * (krupalitrivedi/ahrefs-portfolio-website), which is the source of truth for
 * this site's voice — keep the two in sync when either changes.
 */

export type LinkItem = { title: string; href: string; note?: string };

export const profile = {
  name: "Krupali Trivedi",
  mark: "AC&W",
  tagline: "Growth + Content",
  intro:
    "A little bit of content, a little bit of tech and a lot of marketing. Engineer turned marketer who loves to talk about and tinker around with products and tech.",
  introSecondary:
    "I have worked at and with SaaS, Cloud and Blockchain companies to manage their content marketing. I love being chronically online and seeing different types of content unfold every day.",
  currentlyLabel: "Current rabbit holes",
  currently: "Reddit Marketing, Pinterest Marketing and Video Content",
  period: "2020 to Present",
  email: "krupalitrivedi2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/krupalitrivedi/",
  twitter: "https://x.com/chai_really",
  socials: [
    { title: "X (Twitter)", href: "https://x.com/chai_really" },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/krupalitrivedi/" },
    { title: "Telegram", href: "https://t.me/krupalitrivedi" },
  ] as LinkItem[],
};

/** Headline numbers. `value` and `unit` are split so the unit can be set smaller. */
export const stats = [
  { value: "$20k", unit: "+", label: "Revenue driven", note: "via email as a new channel" },
  { value: "17", unit: "%", label: "Avg. open rate", note: "on email campaigns" },
  { value: "5", unit: "%", label: "Avg. click rate", note: "across the same campaigns" },
  { value: "6", unit: "years", label: "Years writing", note: "technology, for humans" },
];

export const whatIDo = [
  "Growth and Marketing",
  "Technical writing and SEO",
  "Scroll through Twitter and Insta",
  "Drink Matcha",
  "Read Books",
];

/** A run of text, or a link, inside a bullet. */
export type PointSegment = string | { label: string; href: string };

/** A bullet is either plain text or a list of segments with links in it. */
export type Point = string | PointSegment[];

export type ExperienceItem = {
  role: string;
  note?: string;
  org: string;
  period: string;
  body: string;
  points?: Point[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "SEO Blog Writer",
    note: "Freelance",
    org: "Tiiny Host",
    period: "Jun 2024 to Present",
    body: "Writing technical and non-technical articles. Experimenting with tools and sharing experiences on Tiiny Host.",
  },
  {
    role: "Growth Lead",
    org: "Huddle01",
    period: "Jul 2025 to Jun 2026",
    body: "Multiple hats under one name. Writing content, managing social media, managing end to end email marketing, creator outreach and management, product launches and a little bit of everything.",
    points: [
      [
        "Managed social media strategy, content and execution for ",
        { label: "Huddle01 Network", href: "https://x.com/huddle01com" },
        ", ",
        { label: "Huddle01 Meet", href: "https://x.com/MeetonHuddle01" },
        ", ",
        { label: "House", href: "https://x.com/farhousedotclub" },
        " and ",
        { label: "Huddle01 Cloud", href: "https://x.com/Huddle01Cloud" },
        " for X, LinkedIn, Farcaster and Reddit.",
      ],
      "Activated email marketing as one more source of distribution.",
      "Managed end to end email marketing, including specific campaigns during Node Sales and Testnet Activities, with an average open rate of 17% and a click rate of 5%.",
      "Brought in $20k+ revenue through email marketing.",
      "Managed end to end launch and marketing for House (one of Huddle01's products on Base/Farcaster) from creating the social media calendar, preparing videos for the launch, and helping with the direction of GTM.",
      "Hosted “in-house conversations” for House to interview builders on Farcaster and Base, thus inviting more people to test out the product and give feedback.",
      "Strategised, wrote, and managed social media calendar for Huddle01 Network, House and Huddle01 Meet social pages.",
      "Curated and wrote technical blogs and docs for the products.",
      "Led UGC campaigns in the community and on platforms, too, bringing more than 400 video and thread submissions.",
    ],
  },
  {
    role: "Technical Writer and Marketing Associate",
    note: "Promoted to Growth Lead in Jul 2025",
    org: "Huddle01",
    period: "Jun 2024 to Oct 2025",
    body: "Wrote technical and non-technical blogs, helped with social media strategy (for X, LinkedIn and Instagram) and management of in-person marketing campaigns.",
    points: [
      "Actively worked as a social media manager to execute the content calendar and also engage with the audience.",
      "Worked on technical guides and threads that went on social media.",
    ],
  },
  {
    role: "Technical Writer",
    org: "A Code and A Word",
    period: "2020 to Present",
    body: "Transitioned to freelance content writing, delivering high-quality content to multiple businesses across diverse domains. A series of technical blogs and newsletters that covered various technical content for an audience of various experience levels.",
  },
  {
    role: "Technical Content Writer",
    note: "Internship",
    org: "Layer-E DAO Ventures",
    period: "Jun 2023 to Jul 2023",
    body: "Wrote technical content related to blockchain and AI.",
    points: [
      "Crafted technical content in various formats, encompassing blog posts, Twitter threads, and thesis writing.",
      "Engaged in research, thesis composition, and explored zkEVM in Machine Learning.",
    ],
  },
  {
    role: "Marketing Associate",
    org: "Padhega India",
    period: "May 2022 to Nov 2022",
    body: "Helped them curate content across their social media, i.e, Instagram and Twitter.",
    points: [
      "Led festivities-oriented content calendar.",
      "Handled the execution side of things: creating the graphics, low-level animation videos and writing copy and content.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "YBI Foundation",
    period: "2022",
    body: "As an intern at YBI Foundation, I was taught how to implement data science and analytics techniques. Various data cleaning, data transformation and data visualization techniques were taught.",
    tags: ["Python", "NumPy", "Pandas", "Sci-kit", "Matplotlib"],
  },
  {
    role: "Content Writer",
    org: "Digital Entrepreneurs Academy",
    period: "2020",
    body: "Served as a content writer, assisting aspiring entrepreneurs in leveraging social media for business growth.",
  },
  {
    role: "Creative Copywriter",
    org: "ADAX Media",
    period: "2020",
    body: "Initiated my career journey by contributing to digital marketing campaigns for various businesses and restaurants, enhancing their online presence.",
  },
];

export type Project = {
  title: string;
  body: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Huddle01 Content Studio",
    body: "An internal app that generates marketing blogs, emails, social content and cold outreach copy. Built on Claude's API with a shared knowledge base anyone on the team can add to, plus an SEO keyword section so output ships SEO-ready.",
    stack: ["Claude API", "Next.js", "Postgres", "pm2", "Huddle01 Cloud VMs", "Git"],
    href: "https://huddle01.com/blog",
  },
  {
    title: "Peer2Venue",
    body: "A hybrid ticket-booking system writing transaction hashes on-chain to prevent duplicate tickets and over-allocated passes. Admin dashboard, traffic monitoring and a global chat for event attendees.",
    stack: [
      "Next.js",
      "Tailwind",
      "web3.js",
      "ethers.js",
      "Kafka",
      "Redis",
      "Argo",
      "SonarQube",
      "Sepolia",
    ],
  },
  {
    title: "A Code and A Word",
    body: "A long-running series of technical blogs and newsletters covering everything from APIs and cryptography to account abstraction, written for readers at very different experience levels.",
    stack: ["Writing", "Newsletter", "Technical education"],
    // Internal: this site is A Code and A Word, so it points at the archive
    // rather than linking back out to its own domain.
    href: "/writing",
    linkLabel: "Read the writing",
  },
];

export type Article = LinkItem & { type: string; topic: string };

export const writing: Article[] = [
  {
    title: "Read articles written for Tiiny Host",
    href: "https://tiiny.host/blog/author/krupali",
    type: "Collection",
    note: "Tiiny Host",
    topic: "SEO",
  },
  {
    title: "Continuous clearing auction",
    href: "https://x.com/chai_really/status/2016853962344058900",
    type: "Blog",
    note: "X (Twitter)",
    topic: "DeFi",
  },
  {
    title: "Introduction to IVX Finance",
    href: "https://chaireally.substack.com/p/ivx-finance",
    type: "Explainer",
    note: "Substack",
    topic: "DeFi",
  },
  {
    title: "Huddle01: The real-time connectivity network",
    href: "https://x.com/huddle01com/status/1894054341696516430",
    type: "Article",
    note: "X (Twitter)",
    topic: "dRTC",
  },
  {
    title: "Immersive next-gen gaming with Huddle01 dRTC",
    href: "https://huddle01.com/blog/immersive-low-cost-gaming-with-huddle01-drtc",
    type: "Blog",
    note: "Huddle01",
    topic: "Gaming",
  },
  {
    title: "Decoding decentralized real-time communication",
    href: "https://huddle01.com/blog/decoding-drtc-a-quick-introduction",
    type: "Blog",
    note: "Huddle01",
    topic: "dRTC",
  },
  {
    title: "Media Nodes: the atomic unit of the dRTC network",
    href: "https://huddle01.com/blog/media-nodes-the-atomic-unit-of-huddle01-s-drtc-network",
    type: "Blog",
    note: "Huddle01",
    topic: "DePIN",
  },
  {
    title: "Introduction to APIs",
    href: "https://acodeandaword.hashnode.dev/apis-introduction",
    type: "How-to",
    note: "Hashnode",
    topic: "Fundamentals",
  },
  {
    title: "Introduction to Cryptography",
    href: "https://acodeandaword.hashnode.dev/cryptography-basics",
    type: "How-to",
    note: "Hashnode",
    topic: "Fundamentals",
  },
];

export type Thread = LinkItem & { account: string; topic: string };

export const threads: Thread[] = [
  {
    title: "Media Nodes for beginners",
    href: "https://x.com/chai_really/status/1853510385657090229",
    account: "@chai_really",
    topic: "DePIN",
  },
  {
    title: "Starting out as an open source contributor",
    href: "https://x.com/chai_really/status/1604888301789331457",
    account: "@chai_really",
    topic: "Open source",
  },
  {
    title: "Huddle01 for gamers",
    href: "https://x.com/huddle01com/status/1825553813102567731",
    account: "@huddle01com",
    topic: "Gaming",
  },
  {
    title: "What are hyperorganic systems?",
    href: "https://x.com/huddle01com/status/1820478290366283978",
    account: "@huddle01com",
    topic: "Concepts",
  },
  {
    title: "Breaking down the marketing agency crisis",
    href: "https://x.com/chai_really/status/1881762074667458889",
    account: "@chai_really",
    topic: "Marketing",
  },
];

export const publications: LinkItem[] = [
  {
    title: "Huddle01 Blog",
    href: "https://huddle01.com/blog",
    note: "Product & protocol writing",
  },
  {
    title: "Tiiny Host",
    href: "https://tiiny.host/blog/author/krupali/",
    note: "Latest published pieces",
  },
  {
    title: "Gossips with Chai",
    href: "https://gossipswithchai.substack.com/",
    note: "Non-technical writing",
  },
  {
    title: "A little bit on Twitter",
    href: "https://x.com/chai_really/highlights",
    note: "Highlights",
  },
];

export const skills = {
  craft: [
    "Technical Writing",
    "Content Strategy",
    "Email Marketing",
    "Research",
    "Community Management",
    "Communication",
    "GTM",
    "Creator Outreach",
    "Social Media",
  ],
  tech: [
    "Python",
    "JavaScript",
    "Next.js",
    "SQL",
    "Git",
    "GitHub",
    "WordPress",
    "Blockchain",
    "C++",
    "Java",
    "VS Code",
  ],
};

export const contact = {
  heading: "You've come far, thank you!",
  body: "It'd be a pleasure to hear about your project and talk about how I can help. Drop me a line and I'll get back to you.",
};
