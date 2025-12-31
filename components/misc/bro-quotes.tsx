'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// BRO (Border Road Organization) quotes
const broQuotes = [
  {
    text: "We shall not fail or falter; we shall not weaken or tire.",
    author: "BRO"
  },
  {
    text: "The difficult we do immediately. The impossible takes a little longer.",
    author: "BRO"
  },
  {
    text: "Connecting hearts, building roads, serving the nation.",
    author: "BRO"
  },
  {
    text: "We build where others fear to tread.",
    author: "BRO"
  },
  {
    text: "Roads are not just infrastructure, they are lifelines.",
    author: "BRO"
  },
  {
    text: "Dedication, determination, and duty - that's BRO.",
    author: "BRO"
  },
];

export default function BROQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % broQuotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-4">
      {broQuotes.map((quote, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 flex flex-col justify-center items-center px-4 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          <blockquote className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <cite className="text-xs md:text-sm text-gray-600 dark:text-gray-400 not-italic">
            &mdash; {quote.author}
          </cite>
        </div>
      ))}
    </div>
  );
}

