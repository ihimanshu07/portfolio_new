'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export default function TwinklingStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
    // Generate stars
    const numberOfStars = 150;
    const newStars: Star[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5, // 0.5px to 2.5px
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 1, // 1s to 4s
        delay: Math.random() * 2, // 0s to 2s
      });
    }

    setStars(newStars);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {isDark && stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            backgroundColor: '#ffffff',
            opacity: 0.8,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 4}px rgba(255, 255, 255, 0.4)`,
          }}
        />
      ))}
    </div>
  );
}

