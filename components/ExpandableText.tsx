'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ExpandableTextProps {
  children: React.ReactNode;
  maxHeight?: number;
  className?: string;
}

const ExpandableText = ({ children, maxHeight = 150, className = '' }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      {/* On large screens (lg+), show full text always */}
      <div className="hidden lg:block">
        {children}
      </div>

      {/* On mobile/tablet screens, show expandable version */}
      <div className="lg:hidden">
        <motion.div
          initial={false}
          animate={{
            maxHeight: isExpanded ? '1000px' : `${maxHeight}px`,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden relative"
        >
          <div className={!isExpanded ? 'mb-8' : ''}>
            {children}
          </div>
          
          {/* Gradient overlay when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgb(var(--card))] to-transparent pointer-events-none"></div>
          )}
        </motion.div>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-[rgb(var(--accent))] hover:text-emerald-400 transition-colors text-sm font-semibold group"
          whileHover={{ x: 5 }}
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          {isExpanded ? (
            <FiChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          ) : (
            <FiChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ExpandableText;

