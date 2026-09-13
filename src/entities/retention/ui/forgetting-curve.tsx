'use client';

import { motion, useReducedMotion } from 'motion/react';

const WIDTH = 520;
const HEIGHT = 240;

const withoutReviewPath = 'M 8 24 C 60 132, 128 188, 232 206 S 400 222, 512 226';
const withReviewPath =
  'M 8 24 C 48 44, 74 62, 96 64 C 132 68, 150 40, 176 34 C 214 26, 232 52, 262 54 C 306 58, 322 34, 356 30 C 398 26, 418 46, 452 46 C 484 46, 498 32, 512 28';

const reviewMarkers = [
  { x: 96, y: 64, label: 'Dia 1' },
  { x: 176, y: 34, label: 'Dia 3' },
  { x: 262, y: 54, label: 'Dia 8' },
  { x: 356, y: 30, label: 'Dia 17' },
  { x: 452, y: 46, label: 'Dia 30' },
] as const;

export const ForgettingCurve = () => {
  const prefersReducedMotion = useReducedMotion();
  const drawTransition = { duration: 1.6, ease: [0.22, 1, 0.36, 1] } as const;

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label="Gráfico comparando a retenção da memória ao longo de 30 dias: sem revisar, a lembrança cai para perto de 20 por cento já na primeira semana; com as revisões espaçadas do Desfeed, ela se mantém acima de 90 por cento."
      >
        <defs>
          <linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[24, 74, 124, 174, 224].map((y) => (
          <line
            key={y}
            x1="8"
            x2={WIDTH - 8}
            y1={y}
            y2={y}
            stroke="var(--color-border-soft)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}

        <motion.path
          d={`${withReviewPath} L 512 232 L 8 232 Z`}
          fill="url(#curve-fill)"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        <motion.path
          d={withoutReviewPath}
          fill="none"
          stroke="var(--color-border-hard)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="7 9"
          initial={prefersReducedMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={drawTransition}
        />

        <motion.path
          d={withReviewPath}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={prefersReducedMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...drawTransition, delay: 0.25 }}
        />

        {reviewMarkers.map((marker, index) => (
          <motion.circle
            key={marker.label}
            cx={marker.x}
            cy={marker.y}
            r="6"
            fill="var(--color-surface)"
            stroke="var(--color-primary)"
            strokeWidth="3.5"
            initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.6 + index * 0.12 }}
            style={{ transformOrigin: `${marker.x}px ${marker.y}px` }}
          />
        ))}
      </svg>

      <figcaption className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1 w-6 rounded-full bg-primary" />
          Revisando no Desfeed
        </span>
        <span className="flex items-center gap-2 text-ink-muted">
          <span
            aria-hidden="true"
            className="h-1 w-6 rounded-full bg-border-hard"
            style={{ backgroundImage: 'none' }}
          />
          Estudando uma vez só
        </span>
        <span className="text-xs font-medium text-ink-muted">
          Curva ilustrativa, baseada no modelo de Ebbinghaus.
        </span>
      </figcaption>
    </figure>
  );
};
