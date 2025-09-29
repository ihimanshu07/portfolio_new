import { Cpu } from 'lucide-react';

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
export const description ="24 , [ Sol/Eth , Web ] Developer ;";
export const image = "/images/ogimage.png";
export const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;

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

export const products = [
  {
    id: 1,
    name: "Worksuit",
    liveurl: "https://worksuit.in", 
    githuburl: "https://github.com/Vishal-K-988/worksuit.git",  
    video  : "https://www.youtube.com/watch?v=IgwpWnO-Rw0&feature=youtu.be",
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
    status: ["In Progress "],
    },
    {
    id: 2,
    name: "AxiomDocs",
      video : "https://x.com/vishalctx/status/1927045403716821285", 
    githuburl: "https://github.com/Vishal-K-988/AxiomDocs.git",
    docs  :"https://vishalk988.notion.site/Axiom-Docs-Documentation-1fd8a65a485180b69baac4f700a7682e?pvs=4", 
    description:
      "AxiomDocs is a full-stack AI platform that allows users to upload PDF documents and engage in real-time, semantic conversations with their content using Google Gemini AI and LangChain.",
      // thumbnail
    popupImage: "/products/axiomsdocsThumbnail.png",
    // icon
    image: "/products/axiomsdocsIcon.png",
    tech: [
      
      "Gemini",
      "Langchain",
      "Next.js",
      "NextAuth.js",
      "Clerk",
      "AWS",
      "Faiss Vector Store",
      "Tailwind CSS",
      "SQLite"
    ],
    status: ["Completed", "RAG Chatbot"],
    },
    {
    id: 3,
    name: "PixelFlow",
    // liveurl: "",
    githuburl:
      "https://github.com/Vishal-K-988/Image-processing-using-serverless-Cloud-.git",
    description: `Developed a serverless application for efficient image processing using AWS services like S3, IAM, CloudWatch, API Gateway, and Lambda, with the core logic implemented in Javascript.
User can upload their picture and select one of the 3 options: resize, reshape, or crop online. No need to download any kind of editing software; all operations are handled serverlessly over AWS cloud.

Workflow:
1. User uploads their image.
2. Image is stored in an S3 bucket [origin].
3. Lambda function triggers whenever an image is uploaded to the S3 bucket.
4. The processed image is stored in an S3 bucket [destination].
5. With the help of AWS SDK, the processed image is shown back to the user via API.
`,
    popupImage: "/products/serverless.png",
    image: "/products/serverlessIcon.png",
    tech: ["Node.js", "AWS", "React" ],
    status: ["Completed"],
  },
  {
    id: 4,
    name: "Protochain",
    liveurl: "",
    githuburl: "https://github.com/Vishal-K-988/ProtoChain.git",
    description:
      "Protochain is a game-changer for creating smart contracts. This decentralized app uses advanced AI, specifically the Gemini-2.0-flash LLM, to let you build intricate smart contracts just by describing what you want in plain language. It's incredibly efficient, cutting down the time you'd spend coding by a huge 70%! Protochain even won Electrothon 7.0, showing off its innovative approach. Plus, it's super flexible and secure – you can deploy your contracts across Aptos, Polygon, and Ethereum, and it works seamlessly with popular crypto wallets like Petra and MetaMask. Basically, Protochain makes creating and deploying smart contracts much easier and more versatile for everyone.",

    popupImage: "/products/protochain.png",
    image: "/products/cpu.png",
    tech: ["Gemini", "Metamask", "Etherium", "React" , "ShadCN"],
    status: ["Completed" , "Electrothon - 7" , "Gemini Track Prize "],
  },
  {
    id: 5,
    name: "Nodejs",
    liveurl: "https://nodejs.org/en",
    githuburl: "https://github.com/nodejs/nodejs.org/pull/7750#issue-3065327752",
    description:
      "  Moved hardcoded OS, installation methods, and package manager labels from downloadUtils.tsx to a separate downloadConstants.json file for better maintainability. Updated the utility to import and use data from JSON without changing existing behavior.",
    popupImage: "/products/nodejs.png",
    image: "/products/nodejsIcon.png",
    tech: [
      "Node.js",
      "JavaScript",
     
    ],
    status: ["Merged",],
  },
  {
    id: 6,
    name: "Brie ",
    liveurl: "https://brie.io/",
    docs : "https://www.notion.so/vishalk988/Brie-Contribution-20e8a65a4851814897cdf9764e564aba?source=copy_link",
    githuburl: "https://github.com/briehq/brie-extension/pulls?q=is%3Apr+is%3Aclosed+author%3AVishal-K-988",
    description:
      `- Reduced local system resource usage during the build and compilation process.
- Enabled specific limits for developers in development mode.
- Added device and OS version tracking for both Chromium and non-Chromium browsers.
- Implemented support for dark mode.`,
    popupImage: "/products/Brie.png",
    image: "/products/BrieIcon.png",
    tech: [
      "Node.js",
      "Next.Js",
      "Turborepo", 
      "Typescript",
      "Vite", 
      "Polyfills"

    ],
    status: ["Merged",],
  },
];
