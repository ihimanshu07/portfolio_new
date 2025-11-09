'use client';


import {
    SiJavascript,
    SiTypescript,
    SiCplusplus,
    SiPostgresql,
    SiMongodb,
    SiClerk ,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiTailwindcss,
    SiAuth0,
    SiRedux,
    SiZod,
    SiSolana,
    // SiVercel,
   SiKubernetes,
    // SiGithub,
    SiShadcnui,
    SiPostman,
    SiTurborepo,
} from 'react-icons/si';

import { SiLangchain, SiSqlite } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { FaFacebook , FaLessThan} from "react-icons/fa";
import { GiCloudRing } from "react-icons/gi";
import { FaAws } from "react-icons/fa";
import { GiFoxHead } from "react-icons/gi";
import { GiCrossedChains } from "react-icons/gi";
import { SiRazorpay } from "react-icons/si";
import { Badge } from './badge';
import { Marquee } from '../magicui/marquee';
import { Plug } from 'lucide-react';
import { SiVite } from "react-icons/si";



export const techStack = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },

    {name : "Vite" , icon : <SiVite className='text-violet-500'/>},

      { name: 'Polyfills', icon: <SiJavascript className="text-yellow-400" /> },
                    { name: 'Catalyst', icon: <FaLessThan className='text-red-500'/> },

    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      {name : 'Kubernetes', icon : <SiKubernetes className='text-blue-400'/>},
          {name : 'Convex', icon : <GiCloudRing className='text-orange-500 dark:text-white'/>},

    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
        { name: 'Turborepo', icon: <SiTurborepo className="text-[#EF4444] dark:text-[#f87171]" /> },

    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 dark:text-blue-200"  /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'WebSocket', icon: <Plug className="text-blue-500 dark:text-blue-400" /> },

    
    {name : 'AWS', icon : <FaAws className='text-yellow-400'/>},
    {name : "Solana" , icon : <SiSolana  className='text-violet-600'/>},
    {name : "Etherium" , icon : <GiCrossedChains className='text-violet-500'/>},
    {name : "Metamask" , icon : <GiFoxHead className='text-yellow-400'/>},
    {name : "Gemini" , icon :<RiGeminiFill className='text-blue-500'/> },
    {name : "SQLite" , icon : <SiSqlite className='text-blue-600'/>},
    {name : "Faiss Vector Store" , icon : <FaFacebook className='text-blue-500'/>},
    {name : "Langchain", icon : <SiLangchain className='text-green-400' />},
    { name: 'React', icon: <SiReact className="text-sky-400" /> },
    {name : "Clerk" , icon : <SiClerk className='text-gray-300'/>},
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC] dark:text-purple-300" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Express', icon: <SiExpress className="text-black dark:text-white" /> },
    { name: 'Prisma', icon: <SiPrisma className="text-indigo-400" /> },
    {name : 'Razorpay' , icon : <SiRazorpay  className='text-blue-500'/>},
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'ShadCN', icon: <SiShadcnui className="text-violet-400" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'NextAuth.js', icon: <SiAuth0 className="text-orange-500" /> },
    { name: 'Zod', icon: <SiZod className="text-green-400" /> },
    
];
const TechStackMarquee = () => {
    return (

        <div className="absolute top-0 left-0 w-full h-full">
            <Marquee >
                {techStack.map((tech, idx) => (
                    <Badge
                        key={idx}
                        className=" px-3 py-1 text-xs font-medium flex items-center gap-2 rounded-md"
                        variant="outline"
                    >
                        <span className="text-sm">{tech.icon}</span>
                        {tech.name}
                    </Badge>
                ))}
            </Marquee>
        </div>
    );
};

export default TechStackMarquee;
