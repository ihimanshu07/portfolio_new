'use client';

import { useState, useMemo, useEffect } from 'react';
import { Mail, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ObfuscatedEmailProps {
  email: string;
  className?: string;
}

export default function ObfuscatedEmail({ email, className }: ObfuscatedEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [revealedChars, setRevealedChars] = useState(0);

  // Create consistent hash characters for the email
  const hashedEmail = useMemo(() => {
    const hashChars = ['•', '▪', '▫', '○', '◉', '◆', '◇'];
    let hashIndex = 0;
    
    return email
      .split('')
      .map((char) => {
        if (char === '@') return '•';
        if (char === '.') return '▪';
        if (char === ' ') return ' ';
        // Use consistent hash character based on position
        const charHash = hashChars[hashIndex % hashChars.length];
        hashIndex++;
        return charHash;
      })
      .join('');
  }, [email]);

  // Character-by-character reveal animation
  useEffect(() => {
    if (isRevealed && revealedChars < email.length) {
      const timer = setTimeout(() => {
        setRevealedChars((prev) => prev + 1);
      }, 50); // 50ms delay between each character
      return () => clearTimeout(timer);
    }
  }, [isRevealed, revealedChars, email.length]);

  const handleReveal = () => {
    setIsRevealed(true);
    setRevealedChars(0);
  };

  // Get the revealed portion of the email
  const getRevealedEmail = () => {
    if (!isRevealed) return hashedEmail;
    return email.slice(0, revealedChars) + hashedEmail.slice(revealedChars);
  };

  if (isRevealed && revealedChars >= email.length) {
    return (
      <Link
        href={`mailto:${email}?subject=Let's%20chat&body=Hey%20Vishal,%20I%20saw%20your%20portfolio%20and%20it%20was%20quite%20good`}
        target='_blank'
        className={cn(
          'group flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300',
          className
        )}
      >
        <Mail className='w-4 h-4 group-hover:scale-110 transition-transform' />
        <span className='break-all font-medium'>{email}</span>
      </Link>
    );
  }

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <button
        onClick={handleReveal}
        className='group relative flex items-center gap-3 p-3 rounded-lg border border-gray-200/50 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all cursor-pointer text-left w-full'
      >
        <div className='flex-shrink-0'>
          {isRevealed ? (
            <Unlock className='w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors' />
          ) : (
            <Lock className='w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors' />
          )}
        </div>
        <div className='flex-1 min-w-0'>
          <span className='break-all font-mono text-sm tracking-wider text-gray-700 dark:text-gray-300'>
            {getRevealedEmail()}
            {isRevealed && revealedChars < email.length && (
              <span className='inline-block w-0.5 h-4 bg-gray-900 dark:bg-gray-100 ml-0.5 animate-pulse' />
            )}
          </span>
        </div>
      </button>
      {!isRevealed && (
        <p className='text-xs text-gray-500 dark:text-gray-500 italic text-center animate-pulse'>
         Click to decode email
        </p>
      )}
      {isRevealed && revealedChars < email.length && (
        <p className='text-xs text-gray-500 dark:text-gray-500 italic text-center'>
          Decoding...
        </p>
      )}
    </div>
  );
}

