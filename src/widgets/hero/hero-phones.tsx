'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PhoneFrame } from '@/shared/ui/phone-frame';

export const HeroPhones = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backDriftY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const frontDriftY = useTransform(scrollYProgress, [0, 1], [-18, 26]);

  const entrance = prefersReducedMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 34, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
      };

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-10 bottom-10 -z-10 rounded-[3rem] bg-primary-soft"
      />

      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <motion.div
          className="w-[36%] max-w-[190px] pt-10"
          style={prefersReducedMotion ? undefined : { y: backDriftY }}
          {...entrance}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneFrame src="/app/cadernos.png" alt="Tela de matérias do Memfeed, com a retenção de cada assunto" />
        </motion.div>

        <motion.div
          className="w-[46%] max-w-[250px]"
          style={prefersReducedMotion ? undefined : { y: frontDriftY }}
          {...entrance}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneFrame
            src="/app/feed.png"
            alt="Feed do Memfeed mostrando uma pergunta de termodinâmica com quatro alternativas"
            priority
          />
        </motion.div>

        <motion.div
          className="w-[36%] max-w-[190px] pt-16"
          style={prefersReducedMotion ? undefined : { y: backDriftY }}
          {...entrance}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneFrame src="/app/perfil.png" alt="Tela de perfil do Memfeed com o índice de retenção do aluno" />
        </motion.div>
      </div>
    </div>
  );
};
