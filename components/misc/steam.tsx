'use client'

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { FaSteam } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import { EyeIcon, Heart, Info, Loader2Icon, Star } from 'lucide-react'
// import { StarIcon, ThumbsUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as homepageActions from '@/app/actions/homepage-action'
import Link from 'next/link'
import Image from 'next/image';

export function Steam() {
   
    return (
        <Dialog modal={false}>

            {/* dialog trigger  */}
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary mr-1">
                    <FaSteam className="w-5 h-5 text-blue-600  dark:text-white" />
                </Button>
            </DialogTrigger>


            {/* dialogue content  */}
            <DialogContent className="w-[400px] rounded-xl p-4 border border-muted bg-background" overlayClasses="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]  transition-opacity animate-fade-in">
                <DialogHeader className="mb-3 text-center font-semibold text-base">
                    <DialogTitle>
                       Steam
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col space-y-3 text-muted-foreground">

                   
                       <Image
      src="/products/terrorist.jpg" 
      alt="Baby don't hurt me ! "
      className=''
      width={359} 
      height={300} 
    />
    
        <Button variant={'ghost'} size="lg" >
       <span >  Checkout  -&gt; カカシ   </span> </Button>

     
                    

                    
                    
                    {/* likes */}
                    {/* <button
                        className={cn(
                            'flex items-center justify-between w-full hover:text-pink-500 transition-colors',
                            liked && 'text-pink-500'
                        )}
                        onClick={handleLike}
                    >
                        <div className="flex items-center gap-2">
                            <Heart
                                className="w-5 h-5"
                                fill={liked ? 'currentColor' : 'none'}
                            />
                            <span>{likes} likes</span>
                        </div>
                    </button> */}
                    
                    {/* star */}
                    {/* <Link
                        href="https://github.com/VineshRajkumar/my-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full hover:text-yellow-500 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            <span>Star on GitHub</span>
                        </div>
                    </Link> */}



                </div>
            </DialogContent>
        </Dialog>
    )
}

