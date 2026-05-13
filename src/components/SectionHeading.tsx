import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  badge, 
  centered = false,
  className
}) => {
  return (
    <div className={cn(
      "mb-12 md:mb-20",
      centered ? "text-center" : "text-left",
      className
    )}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-[0.2em] uppercase mb-4"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9] mb-6"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-3 overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (i * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={cn(
            "text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed",
            centered ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
