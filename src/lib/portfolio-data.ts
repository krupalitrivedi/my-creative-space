export type LinkItem = { title: string; href: string; note?: string };

export const profile = {
  name: "Krupali Trivedi",
  mark: "AC&W",
  tagline: "Tech. Writing. Yapping.",
  intro:
    "Growth marketer and technical content strategist working across Web3, AI, Cloud and SaaS. I turn complicated systems into words everyone can actually understand.",
  currently: "Focusing on Personal Brand",
  email: "krupalitrivedi2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/krupalitrivedi/",
  twitter: "https://x.com/chai_really",
  socials: [
    { title: "X (Twitter)", href: "https://x.com/chai_really" },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/krupalitrivedi/" },
    { title: "Blog", href: "https://acodeandaword.com/" },
    { title: "Telegram", href: "https://t.me/krupalitrivedi" },
  ] as LinkItem[],
};

export const experience = [
  {
    period: "Jul 2025 — Jul 2026",
    role: "Growth Lead",
    org: "Huddle01",
    body: "Activated email marketing as a distribution and revenue channel — $20k+ in revenue, 17% average open rate and 5% click rate across node sale and testnet campaigns. Led end-to-end launch and GTM for House on Base/Farcaster, ran social calendars for three product pages, and drove UGC campaigns with 400+ video and thread submissions.",
  },
  {
    period: "Jun 2024 — Oct 2025",
    role: "Technical Writer & Marketing Associate",
    org: "Huddle01",
    body: "Long-form technical and non-technical writing on DePIN, real-time communication and AI. Contributed to social and video ideation, plus technical guides and product documentation.",
  },
  {
    period: "2020 — Present",
    role: "Technical Writer, Freelance",
    org: "A Code and A Word",
    body: "Independent technical writing and newsletters for businesses across multiple domains, covering technical content for audiences at every experience level.",
  },
  {
    period: "Jun 2023 — Jul 2023",
    role: "Technical Content Writer",
    org: "Layer-E DAO Ventures",
    body: "Blockchain and machine learning content: blog posts, threads, research and thesis writing, including exploration of zkEVM in machine learning.",
  },
  {
    period: "May 2022 — Nov 2022",
    role: "Marketing Associate",
    org: "Padhega India",
    body: "Curated content across Instagram and Twitter, led a festivities-oriented content calendar, and handled execution — graphics, light animation and copy.",
  },
  {
    period: "2022",
    role: "Data Science Intern",
    org: "YBI Foundation",
    body: "Data cleaning, transformation and visualisation with Python — NumPy, Pandas, Scikit-learn and Matplotlib.",
  },
  {
    period: "2020",
    role: "Content Writer / Creative Copywriter",
    org: "Digital Entrepreneurs Academy · ADAX Media",
    body: "Started out writing for digital marketing campaigns across businesses and restaurants, and helping aspiring entrepreneurs use social media for growth.",
  },
];

export const projects = [
  {
    kind: "Internal AI Tool / 2025",
    title: "HUDDLE01 CONTENT STUDIO",
    body: "A central content engine for the Huddle01 team — marketing blogs, emails, social copy and cold outreach, generated from a shared knowledge base with SEO keyword integration built in.",
    stack: "Claude API · Next.js · Postgres · pm2 · Huddle01 Cloud VMs",
    href: "https://huddle01.com/blog",
  },
  {
    kind: "Blockchain Product / 2024",
    title: "PEER2VENUE",
    body: "A hybrid event ticketing system using on-chain transaction hashes to prevent duplicate tickets and over-allocation, with an admin dashboard, traffic monitoring and a global attendee chat.",
    stack: "Next.js · web3.js · ethers.js · Kafka · Redis · Argo · Sepolia",
  },
];

export const writing: LinkItem[] = [
  {
    title: "Check blogs on Tiiny Host",
    href: "https://tiiny.host/blog/author/krupali",
    note: "Tiiny Host",
  },
  {
    title: "Huddle01: The real-time connectivity network",
    href: "https://x.com/huddle01com/status/1894054341696516430",
    note: "Long-form thread",
  },
  {
    title: "Immersive next-gen gaming with Huddle01 dRTC",
    href: "https://huddle01.com/blog/immersive-low-cost-gaming-with-huddle01-drtc",
    note: "Huddle01 blog",
  },
  {
    title: "Decoding decentralized real-time communication",
    href: "https://huddle01.com/blog/decoding-drtc-a-quick-introduction",
    note: "Huddle01 blog",
  },
  {
    title: "Media Nodes: the atomic unit of the dRTC network",
    href: "https://huddle01.com/blog/media-nodes-the-atomic-unit-of-huddle01-s-drtc-network",
    note: "Huddle01 blog",
  },
  {
    title: "Introduction to IVX Finance",
    href: "https://chaireally.substack.com/p/ivx-finance",
    note: "Substack",
  },
  {
    title: "Introduction to APIs",
    href: "https://acodeandaword.hashnode.dev/apis-introduction",
    note: "A Code and A Word",
  },
  {
    title: "Introduction to Cryptography",
    href: "https://acodeandaword.hashnode.dev/cryptography-basics",
    note: "A Code and A Word",
  },
  {
    title: "Account abstraction in the Web3 space",
    href: "https://acodeandaword.notion.site/p/5364bac633e0439691dd55f55b2070b2",
    note: "Notion",
  },
  {
    title: "All about modal bottom sheets",
    href: "https://acodeandaword.notion.site/p/32c69a429b1e4ec3a306032889b66b92",
    note: "Notion",
  },
];

export const threads: LinkItem[] = [
  { title: "Media Nodes for beginners", href: "https://x.com/chai_really/status/1853510385657090229" },
  {
    title: "Starting out as an open source contributor",
    href: "https://x.com/chai_really/status/1604888301789331457",
  },
  { title: "Huddle01 for gamers", href: "https://x.com/huddle01com/status/1825553813102567731" },
  {
    title: "What are hyperorganic systems?",
    href: "https://x.com/huddle01com/status/1820478290366283978",
  },
  {
    title: "Breaking down the marketing agency crisis",
    href: "https://x.com/chai_really/status/1881762074667458889",
  },
];

export const publications: LinkItem[] = [
  { title: "A Code and A Word", href: "https://acodeandaword.com", note: "Technical blog" },
  { title: "Tiiny Host", href: "https://tiiny.host/blog/author/krupali/", note: "Recent client work" },
  { title: "Huddle01 Blog", href: "https://huddle01.com/blog", note: "Product & protocol writing" },
  {
    title: "Gossips with Chai",
    href: "https://gossipswithchai.substack.com/",
    note: "Personal essays",
  },
];

export const skills = {
  craft: ["Technical Writing", "Content Strategy", "Email Marketing", "Growth & GTM", "Community"],
  tech: ["Python", "JavaScript", "Next.js", "Blockchain", "SQL", "WordPress", "Git"],
};
