'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Book, Youtube, Cpu } from 'lucide-react';
import { Badge } from './badge';
import StatusBadge from '@/components/misc/status-badge';
import { techStack } from './tech-stack-marquee';
import { BentoCard } from './bento-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Skeleton } from './skeleton';
import { cn, isValidImageUrl } from '@/lib/utils';

interface ProjectCardProps {
  product: {
    id: number;
    name: string;
    liveurl?: string;
    githuburl?: string;
    docs?: string;
    video?: string;
    image: string;
    popupImage: string;
    description: string;
    tech?: string[];
    status?: string[];
  };
  size?: 'small' | 'medium' | 'large';
}

export function ProjectCard({ product, size = 'medium' }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const {
    name,
    liveurl,
    githuburl,
    docs,
    video,
    image,
    popupImage,
    description,
    tech = [],
    status = [],
  } = product;

  // Determine grid span based on size
  const gridSpan = {
    small: 'md:col-span-1',
    medium: 'md:col-span-1',
    large: 'md:col-span-2 lg:col-span-2',
  };
  
  const rowSpan = {
    small: '',
    medium: '',
    large: 'md:row-span-2',
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="!max-w-3xl !max-h-[85vh] overflow-hidden !p-0 !gap-0 !border-2 !rounded-2xl !shadow-2xl bg-white dark:bg-black sm:!max-w-3xl flex flex-col"
          overlayClasses="fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          {/* Image/Video Section - Fixed height */}
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] flex-shrink-0 overflow-hidden">
            {imageLoading && (
              <Skeleton className="absolute inset-0 w-full h-full" />
            )}
            {isValidImageUrl(popupImage) ? (
              popupImage.match(/\.(webm|mp4|ogg)$/i) ? (
                <video
                  src={popupImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  preload="auto"
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-300",
                    imageLoading ? "opacity-0" : "opacity-100"
                  )}
                  onLoadedData={() => setImageLoading(false)}
                />
              ) : (
                <Image
                  src={popupImage}
                  alt={`Preview of ${name}`}
                  fill
                  className={cn(
                    "object-cover transition-opacity duration-300",
                    imageLoading ? "opacity-0" : "opacity-100"
                  )}
                  unoptimized={popupImage.endsWith('.gif')}
                  onLoadingComplete={() => setImageLoading(false)}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  onError={() => setImageLoading(false)}
                />
              )
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 text-sm">No preview available</span>
              </div>
            )}
          </div>

          {/* Content Section - Scrollable */}
          <div className="flex-1 overflow-y-auto p-5 md:p-6 lg:p-7">
            <DialogHeader>
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="relative flex-shrink-0">
                  {isValidImageUrl(image) ? (
                    <Image
                      src={image}
                      alt={name}
                      width={48}
                      height={48}
                      className="rounded-xl md:w-14 md:h-14"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 md:mb-3">
                    {name}
                  </DialogTitle>
                  {/* Status Badges */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {status.map((s) => (
                      <StatusBadge key={s} status={s} />
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>

            {/* Full Description */}
            <DialogDescription className="text-sm md:text-base text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4 md:mb-6 leading-relaxed">
              {description}
            </DialogDescription>

            {/* Tech Stack */}
            {tech.length > 0 && (
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {tech.map((t) => {
                    const match = techStack.find((item) => item.name === t);
                    return (
                      <Badge
                        key={t}
                        className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2 rounded-md"
                        variant="outline"
                      >
                        <span className="text-sm md:text-base">{match?.icon}</span>
                        {t}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-800">
              {liveurl && (
                <Link
                  href={liveurl}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Live Site</span>
                </Link>
              )}
              {githuburl && (
                <Link
                  href={githuburl}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>View Code</span>
                </Link>
              )}
              {docs && (
                <Link
                  href={docs}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Book className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Documentation</span>
                </Link>
              )}
              {video && (
                <Link
                  href={video}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Youtube className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Watch Video</span>
                </Link>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <BentoCard 
        className={cn(
          'overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
          gridSpan[size], 
          rowSpan[size]
        )}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <div className="relative w-full h-full flex flex-col">
        {/* Content Section */}
        <div className={cn(
          "flex flex-col flex-1",
          size === 'small' ? 'p-3' : 'p-4 md:p-6'
        )}>
          {/* Header with Logo and Title */}
          <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
            <div className="relative flex-shrink-0">
              {isValidImageUrl(image) ? (
                <Image
                  src={image}
                  alt={name}
                  width={size === 'small' ? 32 : 40}
                  height={size === 'small' ? 32 : 40}
                  className="rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div className={`${size === 'small' ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center`}>
                  <Cpu className={`${size === 'small' ? 'w-4 h-4' : 'w-5 h-5'} text-gray-400`} />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={cn(
                "font-semibold text-gray-900 dark:text-gray-100 mb-1.5 md:mb-2 line-clamp-1",
                size === 'small' ? 'text-sm' : 'text-lg'
              )}>
                {name}
              </h3>
              {/* Status Badges */}
              <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2">
                {status.slice(0, size === 'small' ? 1 : 2).map((s) => (
                  <StatusBadge key={s} status={s} />
                ))}
                {status.length > (size === 'small' ? 1 : 2) && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">+{status.length - (size === 'small' ? 1 : 2)}</span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className={cn(
            "text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1",
            size === 'small' ? 'line-clamp-2' : size === 'medium' ? 'line-clamp-3' : 'line-clamp-4'
          )}>
            {description}
          </p>

          {/* Tech Stack */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tech.slice(0, size === 'large' ? 8 : size === 'medium' ? 5 : 3).map((t) => {
                const match = techStack.find((item) => item.name === t);
                return (
                  <Badge
                    key={t}
                    className="px-2 py-0.5 text-xs font-medium flex items-center gap-1 rounded-md"
                    variant="outline"
                  >
                    <span className="text-xs">{match?.icon}</span>
                    <span className="truncate">{t}</span>
                  </Badge>
                );
              })}
              {tech.length > (size === 'large' ? 8 : size === 'medium' ? 5 : 3) && (
                <Badge variant="outline" className="px-2 py-0.5 text-xs">
                  +{tech.length - (size === 'large' ? 8 : size === 'medium' ? 5 : 3)}
                </Badge>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-gray-200 dark:border-gray-800">
            {liveurl && (
              <Link
                href={liveurl}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live</span>
              </Link>
            )}
            {githuburl && (
              <Link
                href={githuburl}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-3.5 w-3.5" />
                <span>Code</span>
              </Link>
            )}
            {docs && (
              <Link
                href={docs}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Book className="h-3.5 w-3.5" />
                <span>Docs</span>
              </Link>
            )}
            {video && (
              <Link
                href={video}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Youtube className="h-3.5 w-3.5" />
                <span>Video</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      </BentoCard>
    </>
  );
}

