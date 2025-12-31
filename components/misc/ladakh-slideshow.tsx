'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// High-quality Ladakh images
const ladakhImages = [
    {
        url: '/Thiksay Monastery, Ladakh, India.jpg',
        alt: 'Thiksay Monastery, Ladakh',
      },
      {
        url: '/bike.jpg',
        alt: 'bike',
      },
      {
        url: '/Just vibe.jpg',
        alt: 'Ladakh Vibe',
      },
  {
    url: '/download (6).jpg',
    alt: 'Ladakh Landscape',
  },
  {
    url: '/download (7).jpg',
    alt: 'Ladakh Scenery',
  },
 
  {
    url: '/lewis.jpg',
    alt: 'Ladakh HD Wallpaper',
  },
  {
    url: '/Love, love, LOVE!.jpg',
    alt: 'Ladakh Love',
  },
  {
    url: '/lewis7.jpg',
    alt: 'Ladakh HD Wallpaper',
  },
  {
    url: '/HD wallpaper.jpg',
    alt: 'Ladakh HD Wallpaper',
  },
  {
    url: '/ms.jpg',
    alt: 'Ladakh HD Wallpaper',
  },

  
];

export default function LadakhSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ladakhImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href="https://www.incredibleindia.gov.in/en/ladakh"
      target="_blank"
      className="group relative block w-full h-full aspect-square rounded-xl overflow-hidden"
    >
      <div className="relative w-full h-full">
        {ladakhImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              onLoad={() => index === 0 && setIsLoading(false)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
        
        {/* Overlay with location info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Ladakh </span>
          </div>
        </div>

        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        )}

        {/* Image indicators */}
        <div className="absolute top-4 right-4 flex gap-1.5">
          {ladakhImages.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'w-6 bg-white'
                  : 'w-1.5 bg-white/50'
              )}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

