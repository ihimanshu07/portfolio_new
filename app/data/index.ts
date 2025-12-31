
export interface MenuItem {
  label: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  liveurl: string;
  githuburl: string;
  description: string;
  popupImage: string;
  image: string;
  tech: string[];
  status: string[];
  docs?: string;
  video?: string;
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

export const title = "Gaurav";
export const description = "24, Full Stack Developer";
export const image = "/images/preview.png";
export const url = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const ogImage = {
  src: "/images/preview.png",
  alt: "Vishal",
};

export const seo = {
  twitterHandle: "@vishalctx",

 
  keywords: [
    //  Personal Branding: Vishal 
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

    //  Personal Branding
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

    //  Personal Branding
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

    //  Personal Branding:
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

    //  Personal Questions (across all name variations)
    "who is vishal developer",
    "who is vishal kumar geed developer",
    "who is vishal kumar developer",
    "who is vishalkumargeed developer",
    "where can I see vishal's projects",
    "where can I see vishal  projects",
    "where can I see vishal kumar's projects",
    "how to contact vishal",
    "how to contact vishal kumar geed",
    "how to contact vishal kumar geed",
    "how to contact vishalkumargeed",
    "what tech stack does vishal use",
    "what tech stack does vishal kunar geed use",
    "what tech stack does vishal kumar geed use",

    //  Internship & Job Keywords
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

    //  Internship Questions
    "where can I find web dev interns in India",
    "how to hire a full stack intern",
    "who is a good full stack intern in pune",

    //  Tech Stack Keywords
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

export const products: Product[] = [
  {
    id: 1,
    name: "Movie Finder Web Application",
    liveurl: "https://movie-finder-two-kappa.vercel.app/",
    githuburl: "https://github.com/ihimanshu07/Movie-Finder",
    description:
      "A responsive movie discovery platform with search, filtering, and favourites. Includes debounced search, lazy loading, and mobile-first UX.",
    popupImage: "/products/movie-finder.jpg",
    image: "/products/movie-finder.jpg",
    tech: [
      "React.js",
      "Next.js",
      "TMDB API",
    ],
    status: ["Completed"],
  },
  {
    id: 2,
    name: "Task Manager Application",
    liveurl: "https://zohoassignement-60051334413.catalystserverless.in/app/",
    githuburl: "https://github.com/ihimanshu07/Task-manager",
    description:
      "A full-stack task management system built using serverless architecture. Includes secure authentication and REST APIs for task CRUD operations.",
    popupImage: "/products/catalyst.png",
    image: "/products/catalyst-icon.png",
    tech: [
      "Zoho Catalyst",
      "React.js",
    ],
    status: ["Completed"],
  },
  {
    id: 3,
    name: "KAKA Shop Manager",
    liveurl: "https://kaka-shop.vercel.app/",
    githuburl: "https://github.com/ihimanshu07/KAKA_SHOP",
    description:
      "A scalable shop management system with OAuth authentication and JWT-based sessions. Supports inventory and product management using Prisma ORM and PostgreSQL.",
    popupImage: "/products/kaka-shop-manager.jpg",
    image: "/products/kaka-shop-manager.jpg",
    tech: [
      "Next.js",
      "React.js",
      "Prisma ORM",
      "PostgreSQL",
      "OAuth",
      "JWT",
    ],
    status: ["Completed"],
  },
];
