'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Spaceship() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isDark) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted, isDark]);

  if (!mounted || !isDark) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative">
        {/* Spaceship body */}
        <div
          className="relative"
          style={{
            width: '48px',
            height: '48px',
          }}
        >
          {/* Main body */}
          <div
            className="absolute"
            style={{
              width: '40px',
              height: '24px',
              backgroundColor: '#000000',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)',
              border: '1px solid #ffffff',
            }}
          />
          
          {/* Cockpit */}
          <div
            className="absolute"
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              left: '50%',
              top: '35%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), inset 0 0 4px rgba(0, 0, 0, 0.3)',
            }}
          />
          
          {/* Wings */}
          <div
            className="absolute"
            style={{
              width: '0',
              height: '0',
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '16px solid #000000',
              left: '50%',
              top: '60%',
              transform: 'translateX(-50%)',
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))',
              borderTopColor: '#000000',
            }}
          />
          <div
            className="absolute"
            style={{
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '14px solid #ffffff',
              left: '50%',
              top: '62%',
              transform: 'translateX(-50%)',
            }}
          />
          
          {/* Engine glow */}
          <div
            className="absolute animate-pulse"
            style={{
              width: '24px',
              height: '8px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              left: '50%',
              top: '70%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.4)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
