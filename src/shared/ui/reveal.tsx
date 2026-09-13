'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

type RevealProps = {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly className?: string;
  readonly as?: 'div' | 'li' | 'span';
};

export const Reveal = ({
  children,
  delay = 0,
  distance = 24,
  className,
  as = 'div',
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};
