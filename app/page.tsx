import { products } from '@/app/data/index';


// import AvailabilityStatus from '@/components/misc/current-time';
import Header from '@/components/misc/headers';
import ProjectPopup from '@/components/misc/popup';
import { FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
// import BaseHead from '@/components/seo/basehead';


import { Badge } from '@/components/ui/badge';
import TechStackMarquee from '@/components/ui/tech-stack-marquee';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

// import Image from 'next/image';
import Link from 'next/link';



export default function Home() {

  return (
    <>
    
      <div className=''>
        <div id='navbar+title' className=' flex flex-col w-full gap-5.5 sm:gap-5 max-w-xl '>

          {/* NAV  */}
          <Header />

          {/* TITLE */}
          <h1 className='w-full text-start text-[min(12vw,72px)] font-medium leading-[0.9] tracking-[-2px] sm:tracking-[-4px]'>
           <span className=' text-4xl'> こんにちわ </span>, <br /> I&#39;m Vishal<br />
            {/* <span className='text-gray-500 dark:text-gray-400 text-6xl '>Web & Blockchain</span> */}
          </h1>

          <Badge variant="outline" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </Badge>

          {/* ABOUT */}
          <main id='about' className='flex flex-col gap-4 '>

            {/* description  */}
            <section className='font-medium text-lg text-gray-700 dark:text-gray-400'>
              24 ,<span className='text-black dark:text-white'> [ Sol/Eth , Web ] </span>Developer ;
            </section>

            {/* banner */}
            <section className="relative h-12 w-full overflow-hidden">
              <TechStackMarquee />
            </section>

            {/* projects */}
            <section className=' font-medium text-lg text-gray-700 dark:text-gray-300'>
             Projects | OpenSource : 
              <div className=' flex flex-wrap gap-2 mt-5'>
                {
                  products.map((product) => (
                    <div key={product.id} className='' >
                      <ProjectPopup name={product.name} liveurl={product.liveurl} githuburl={product.githuburl} image={product.image} popupImage={product.popupImage} docs= {product.docs} video = {product.video} description={product.description} tech={product.tech} status={product.status} />
                    </div>
                  ))
                }
              </div>
            </section>

            {/* <section className='font-medium text-lg text-gray-700 dark:text-gray-400'>
              I am open to internships, projects, or just connecting.
            </section> */}

            <section className='font-medium text-md text-gray-700 dark:text-gray-400 text-center md:text-left '>
              
              <Tooltip>
                <Link
                  href="mailto:vishalkumargeed@gmail.com?subject=Let's%20chat&body=Hey%20Vishal,%20I%20saw%20your%20portfolio%20and%20it%20was%20quite%20good"
                  target='_blank'
                >
                  <TooltipTrigger className=''>vishalkumargeed@gmail.com</TooltipTrigger>
                  <TooltipContent> <p>vishalkumargeed@gmail.com</p> </TooltipContent>
                </Link>
              </Tooltip>
            </section>


          </main>

          {/* social links  */}
          <footer
            id='social-links'
            className='flex max-[410px]:flex-col max-[410px]:gap-3 justify-between items-center '>
            <div className="flex flex-wrap gap-5">

              {/* github  */}
              <Link 
              href={"https://github.com/vishal-k-988"}
              target='_blank'
              className='text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              > <FaGithub className='w-6 h-6 text-black dark:text-white'/>

              </Link>

              {/* twitter  */}
               <Link 
              href={"https://x.com/vishalctx"}
              target='_blank'
              className='text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              > <FaXTwitter className='w-6 h-6 text-black dark:text-white'/>

              </Link>

              {/* resume  */}
               <Link 
              href={"https://drive.google.com/file/d/1QD6S8-6-dBYudLATb98ZsP_jIMF9R8m5/view?usp=sharing"}
              target='_blank'
              className='text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              > <SiGoogledocs className='w-6 h-6 text-black dark:text-white'/>

              </Link>



             
            </div>
          

            <div className='text-[15px] max-[410px]:text-[15px] text-gray-700 dark:text-gray-300 normal-case  hover:text-gray-900 dark:hover:text-gray-100 hover:underline '>
                <Tooltip>
                <Link
                  href="https://www.incredibleindia.gov.in/en/ladakh"
                  target='_blank'
                >
                  <TooltipTrigger className=''>Ladakh</TooltipTrigger>
                  <TooltipContent> <p>Ladakh</p> </TooltipContent>
                </Link>
              </Tooltip>
          
            </div>
            
          </footer>
        </div>
      </div>
    </>
  );
}
