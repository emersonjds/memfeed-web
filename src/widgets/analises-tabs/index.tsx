'use client';

import { useState } from 'react';
import type { PublishedLesson } from '@/entities/turma/model';
import type { Student } from '@/entities/aluno/model';
import { ConceitosEsquecidos } from '@/widgets/conceitos-esquecidos';
import { TabelaAlunos } from '@/widgets/tabela-alunos';
import { cn } from '@/shared/lib/cn';

type Tab = 'turma' | 'alunos';

type AnalisesTabsProps = {
  readonly lessons: readonly PublishedLesson[];
  readonly students: readonly Student[];
};

const tabs: ReadonlyArray<{ readonly id: Tab; readonly label: string }> = [
  { id: 'turma', label: 'Turma' },
  { id: 'alunos', label: 'Alunos' },
];

export const AnalisesTabs = ({ lessons, students }: AnalisesTabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('turma');

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div
        role="tablist"
        aria-label="Análises da turma"
        className="flex w-full gap-2 rounded-full border border-border-soft bg-surface p-1 sm:w-fit"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'min-h-11 flex-1 rounded-full px-5 text-sm font-semibold transition-colors sm:flex-none',
              activeTab === tab.id
                ? 'bg-primary-soft text-primary-deep'
                : 'text-ink-muted hover:bg-surface-soft hover:text-ink',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'turma' ? (
        <ConceitosEsquecidos lessons={lessons} />
      ) : (
        <TabelaAlunos students={students} />
      )}
    </div>
  );
};
