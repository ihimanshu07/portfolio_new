export interface MenuItem {
  label: string;
  url: string;
}

export const menuItems: MenuItem[] = [
  // {
  // 	label: "vishal",
  // 	url: "/",
  // },
  // {
  // 	label: "writings",
  // 	url: "/writings",
  // },
  // {
  // 	label: "thoughts",
  // 	url: "/thoughts",
  // },
  // {
  // 	label: "ships",
  // 	url: "/ships",
  // },
];

export const title = "Vishal";
export const description =
  "I build modern apps, design clean UIs, and love turning ideas into reality.";
export const image = "/images/ogimage.png";
export const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export const ogImage = {
  src: "/images/ogimage.png",
  alt: "Vishal",
};

export const seo = {
  twitterHandle: "@vishalctx",

  /*
  Prompt :- 
  	Act as an SEO expert. I need help developing a list of relevant, high-volume, and low-competition keywords for my portfolio website. Please provide keywords, including long-tail variations, and group them by topic. Also, suggest related questions users might search for.
	Give me all those keywords which users might search and which will rank my portfolio above all when my name is searched 
	i am giving you some information about me 
	[INFO HERE]
	Please generate don't worry about the words limit i need my website to rank even if the just the word "vinesh" is searched
  */
  keywords: [
    // 🔥 Personal Branding: Vishal 
    "vishal",
    "vishal portfolio",
    "vishal developer",
    "vishal full stack developer",
    "vishal github",
    "vishal linkedin",
    "vishal contact",
    "vishal resume",
    "vishal intern",
    "vishal",
    "vishal website",
    "vishal personal site",
    "vishal projects",
    "vishal open to work",
    "vishal available for internship",
    "vishal frontend developer",
    "vishal backend developer",

    // 🔥 Personal Branding
    "vishal kumar geed ",
    "vishal kumar geed  portfolio",
    "vishal kumar geed  developer",
    "vishal kumar geed  full stack developer",
    "vishal kumar geed  pune",
    "vishal kumar geed  github",
    "vishal kumar geed  linkedin",
    "vishal kumar geed  website",
    "vishal kumar geed  personal site",
    "vishal kumar geed  projects",
    "vishal kumar geed  contact",
    "vishal kumar geed  resume",
    "vishal kumar geed  intern",
    "vishal kumar geed  open to work",
    "vishal kumar geed  frontend developer",
    "vishal kumar geed  backend developer",

    // 🔥 Personal Branding
    "vishal kumar geed",
    "vishal kumar geed portfolio",
    "vishal kumar geed developer",
    "vishal kumar geed full stack developer",
    "vishal kumar geed pune",
    "vishal kumar geed github",
    "vishal kumar geed linkedin",
    "vishal kumar geed website",
    "vishal kumar geed personal site",
    "vishal kumar geed projects",
    "vishal kumar geed contact",
    "vishal kumar geed resume",
    "vishal kumar geed intern",
    "vishal kumar geed frontend developer",
    "vishal kumar geed backend developer",
    "vishal kumar geed open to work",

    // 🔥 Personal Branding:
    "vishalkumargeed",
    "vishalkumargeed portfolio",
    "vishalkumargeed developer",
    "vishalkumargeed full stack developer",
    "vishalkumargeed website",
    "vishalkumargeed personal site",
    "vishalkumargeed projects",
    "vishalkumargeed contact",
    "vishalkumargeed resume",
    "vishalkumargeed intern",
    "vishalkumargeed frontend developer",
    "vishalkumargeed backend developer",
    "vishalkumargeed open to work",

    // ❓ Personal Questions (across all name variations)
    "who is vishal developer",
    "who is vishal kumar geed developer",
    "who is vishal kumar developer",
    "who is vishalkumargeed developer",
    "where can I see vishal's projects",
    "where can I see vishal raj’s projects",
    "where can I see vishal rajkumar’s projects",
    "how to contact vishal",
    "how to contact vishal kumar geed",
    "how to contact vishal kumar geed",
    "how to contact vishalkumargeed",
    "what tech stack does vishal use",
    "what tech stack does vishal kunar geed use",
    "what tech stack does vishal kumar geed use",

    // 💼 Internship & Job Keywords
    "web developer open for internship",
    "full stack developer seeking internship",
    "frontend developer open to work",
    "backend developer looking for internship",
    "19 year old full stack developer",
    "btech cse student developer portfolio",
    "intern web developer nextjs",
    "hire full stack developer pune",
    "web developer portfolio nextjs",
    "looking for frontend internship india",
    "nextjs developer available for hire",
    "open source contributor india",
    "developer open for collaboration",

    // ❓ Internship Questions
    "where can I find web dev interns in India",
    "how to hire a full stack intern",
    "who is a good full stack intern in pune",

    // 🛠️ Tech Stack Keywords
    "nextjs developer portfolio",
    "full stack developer using nextjs",
    "tailwind css portfolio",
    "websocket realtime app",
    "prisma postgres nextjs",
    "mongodb and nextauth project",
    "zod and shadcn ui project",
    "typescript developer portfolio",
    "node express backend developer",
    "react developer 2025",

    //  Tech Stack Questions
    "what can I build with nextjs and websocket",
    "how to build a modern saas with tailwind css",
    "is prisma better than mongodb",

    //  Project: Worksuit
    "worksuit client-freelancer platform",
    "freelancer project management",
    "secure document signing platform",
    "stripe payments for freelancers",
    "aws s3 file management",
    "ai integration project management",
    "vishal worksuit project",

//  Worksuit Questions
    "how to build client-freelancer platform",
    "integrate stripe payments for freelancers",
    "secure document signing solutions",

//  Project: Cloud-Native Web Voting Application With Kubernetes
    "kubernetes web voting app",
    "react golang mongodb kubernetes",
    "cloud native voting application aws",
    "dockerized voting app",
    "programming language voting app",
    "vishal voting app project",

// ❓ Cloud-Native Web Voting Application With Kubernetes Questions
    "how to deploy react app on kubernetes",
    "build web voting app with golang",

// 🔶 Project: Cloud-Based Serverless Image Processing Application
    "aws serverless image processing",
    "lambda s3 image processing",
    "api gateway image processing",
    "cloudwatch monitoring aws lambda",
    "javascript serverless image app",
    "vishal image processing project",

// ❓ Cloud-Based Serverless Image Processing Application Questions
    "how to build serverless image processing aws",
    "lambda functions for image manipulation",

// 🔶 Project: Protochain: Decentralized Smart Contract Generator
    "genai smart contract generator",
    "aptos polygon ethereum dapp",
    "metamask petra integration",
    "llm natural language smart contracts",
    "protochain decentralized app",
    "vishal protochain project",

// ❓ Protochain: Decentralized Smart Contract Generator Questions
    "how to generate smart contracts with ai",
    "build dapp with gemini llm",

// 🔶 Project: AxiomDocs - AI-powered PDF Chat Platform
    "ai pdf chat platform",
    "react tailwind pdf chat",
    "langchain google gemini pdf",
    "faiss vector store pdf qa",
    "sqlite sqlalchemy pdf chat",
    "axiomdocs ai project",
    "vishal axiomdocs project",

// ❓ AxiomDocs - AI-powered PDF Chat Platform Questions
    "how to build ai chat with pdf",
    "integrate langchain with google gemini",

    // 🌎 Geographic
    "developer in pune india",
    "full stack developer pune",
    "btech cse student pune",
    "indian full stack developer",
    "24 year old developer india",

    // 📈 Long-Tail SEO
    "best portfolio website for full stack developer",
    "real time drawing app with canvas and websocket",
    "anonymous message app with otp verification",
    "nextjs full stack project with authentication",
    "developer portfolio with open source projects",
    "tailwind css clean ui examples",
    "internship ready developer portfolio site",
    "responsive portfolio website built in nextjs",
    "how to build buy me a coffee clone",
    "full stack web apps made by students",
    "portfolio with blog, chat, and drawing apps",
    "developer personal website nextjs tailwind",
  ],

  authors: [
    {
      name: "Vishal Kumar Geed",
      url: "https://github.com/Vishal-k-988",
    },
  ],
};

export const products = [
  {
    id: 1,
    name: "Worksuit",
    liveurl: "https://worksuit.in", 
    githuburl: "https://github.com/Vishal-K-988/worksuit.git",  
    description:
      "Worksuit is a robust client-freelancer platform designed to streamline project workflows with real-time communication, progress tracking, and integrated secure document/contract signing. It also integrates di obust file management via AWS S3.",
    // thumbnail                
      popupImage: "/products/worksuitThumbnail.jpeg",
    // logo
    image: "/products/worksuitLogo.png",
    tech: [
      "AWS",
      "Convex",
      "Express.js",
      "Next.js",
      "Node.js",
      "ShadCN",
      "NextAuth.js",
      "Razorpay",
      "Tailwind CSS",
      "Turborepo",
      "TypeScript",
      "Zod",
    ],
    status: ["Building"],
    },
    {
    id: 2,
    name: "Cafe",
    liveurl: "https://kindness-cafe.vercel.app/",
    githuburl: "https://github.com/VineshRajkumar/KindnessCafe.com",
    description:
      "KindnessCafe.com is a platform similar to Buy Me a Coffee, where users can support their favorite creators by donating money. The website features user authentication, payment processing via Razorpay, and a personalized dashboard for each user.",
    popupImage: "/products/kindnesscafePopup.png",
    image: "/products/kindnesscafe.jpg",
    tech: [
      "JavaScript",
      "MongoDB",
      "Next.js",
      "NextAuth.js",
      "Razorpay",
      "Tailwind CSS",
    ],
    status: ["Completed", "UI Redesign", "In Progress"],
    },
    {
    id: 3,
    name: "AlertMe",
    // liveurl: "",
    githuburl:
      "https://github.com/VineshRajkumar/TEAM_ACCELERATE_SIH_SCRAPER_2024",
    description:
      "This project was developed as part of Smart India Hackathon (SIH) 2024, tackling Problem Statement 1676.\nOur goal was to create a near real-time vulnerability monitoring system that detects and alerts users about critical vulnerabilities in OEM equipment (IT & OT) faster than the National Vulnerability Database (NVD).\nThis project deepened our understanding of cybersecurity, AI-based threat detection, and large-scale web scraping.",
    popupImage: "/products/alertmePopup.png",
    image: "/products/alertme.png",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Puppeteer"],
    status: ["Prototype"],
  },
  {
    id: 4,
    name: "Brown",
    liveurl: "https://vineshrajkumar.github.io/Brown/",
    githuburl: "https://github.com/VineshRajkumar/Brown",
    description:
      "The Brown Blog Site is a blogging platform where users can sign up, write posts, and manage their content with ease. It offers a clean, responsive interface for reading and publishing blogs. Ideal for creators looking to share ideas and manage posts effortlessly.",
    popupImage: "/products/brownPopup.png",
    image: "/products/brown.png",
    tech: ["React", "Redux", "Tailwind CSS", "ShadCN"],
    status: ["Completed"],
  },
  {
    id: 5,
    name: "MystryMsg",
    liveurl: "https://mystery-message-net.vercel.app/",
    githuburl: "https://github.com/VineshRajkumar/MysteryMessage",
    description:
      "Mystery Message App lets users collect anonymous feedback through a secure, OTP-verified sign-up. Each user gets a unique public link to receive messages without revealing the sender's identity. Perfect for creators, professionals, and teams seeking honest, private feedback.",
    popupImage: "/products/mystrymsgPopup.png",
    image: "/products/mystrymsg.png",
    tech: [
      "Next.js",
      "MongoDB",
      "NextAuth.js",
      "Zod",
      "ShadCN",
      "Tailwind CSS",
    ],
    status: ["Completed", "UI Redesign", "In Progress"],
  },
];

export const socialLinks = [
  {
    label: "@x",
    url: "https://x.com/vishalctx",
  },
  {
    label: "#resume",
    url: "https://drive.google.com/drive/folders/1VGypChlFNmYxKn1_nAL6PpZ2YOXN1lZz",
  },
  {
    label: "@github",
    url: "https://github.com/vishal-k-988",
  },
  {
    label: "@linkedin",
    url: "https://www.linkedin.com/in/vishal-k-26-05-2001/",
  },
];
