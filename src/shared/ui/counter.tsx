'use client';

import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { formatNumber } from '@/shared/lib/format';

type CounterProps = {
  readonly value: number;
  readonly decimals?: 0 | 1;
  readonly suffix?: string;
  readonly durationSeconds?: number;
};

export const Counter = ({
  value,
  decimals = 0,
  suffix = '',
  durationSeconds = 1.4,
}: CounterProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion || !isInView) return;

    const controls = animate(0, value, {
      duration: durationSeconds,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        element.textContent = `${formatNumber(latest, decimals)}${suffix}`;
      },
    });

    return () => {
      controls.stop();
      element.textContent = `${formatNumber(value, decimals)}${suffix}`;
    };
  }, [decimals, durationSeconds, isInView, prefersReducedMotion, suffix, value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {formatNumber(value, decimals)}
      {suffix}
    </span>
  );
};
