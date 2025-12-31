import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoCardProps {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function BentoCard({ className, children, title, description, onClick }: BentoCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-800/50',
        'bg-white dark:bg-black',
        'p-6 transition-all duration-300',
        'hover:border-gray-300 dark:hover:border-gray-800',
        'hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50',
        'hover:-translate-y-0.5',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

