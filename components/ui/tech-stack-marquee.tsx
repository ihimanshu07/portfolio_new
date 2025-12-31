'use client';


import {
    SiJavascript,
    SiCplusplus,
    SiPython,
    SiHtml5,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiPrisma,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiAuth0,
    SiGit,
    SiGithub,
} from 'react-icons/si';

import { FaAws, FaLessThan } from "react-icons/fa";
import { Badge } from './badge';
import { Marquee } from '../magicui/marquee';
import { Key, Code } from 'lucide-react';



export const techStack = [
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Java', icon: <Code className="text-orange-500" /> },
    { name: 'Python', icon: <SiPython className="text-blue-500" /> },
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'React.js', icon: <SiReact className="text-sky-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Prisma ORM', icon: <SiPrisma className="text-indigo-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 dark:text-blue-200" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'JWT', icon: <Key className="text-yellow-500" /> },
    { name: 'OAuth', icon: <SiAuth0 className="text-orange-500" /> },
    { name: 'Git', icon: <SiGit className="text-orange-600" /> },
    { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" /> },
    { name: 'AWS', icon: <FaAws className="text-yellow-400" /> },
    { name: 'Zoho Catalyst', icon: <FaLessThan className="text-red-500" /> },
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
