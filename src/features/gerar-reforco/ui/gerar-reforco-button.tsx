'use client';

import { useState } from 'react';
import { requestReinforcement } from '@/entities/aluno/api';
import { Button } from '@/shared/ui/button';

const REINFORCEMENT_CARD_COUNT = 8;

type ReinforcementState =
  | { readonly status: 'idle' }
  | { readonly status: 'loading' }
  | { readonly status: 'success'; readonly message: string }
  | { readonly status: 'error'; readonly message: string };

type GerarReforcoButtonProps = {
  readonly studentId: string;
  readonly displayName: string;
  readonly weakestConcepts: readonly string[];
};

export const GerarReforcoButton = ({
  studentId,
  displayName,
  weakestConcepts,
}: GerarReforcoButtonProps) => {
  const [state, setState] = useState<ReinforcementState>({ status: 'idle' });
  const hasConcepts = weakestConcepts.length > 0;

  const handleClick = async (): Promise<void> => {
    setState({ status: 'loading' });
    try {
      const result = await requestReinforcement({
        studentId,
        concepts: weakestConcepts,
        cardCount: REINFORCEMENT_CARD_COUNT,
      });
      setState({
        status: 'success',
        message: `${result.published} cards enviados para ${displayName}`,
      });
    } catch (error) {
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Falha ao gerar reforço.',
      });
    }
  };

  if (state.status === 'success') {
    return <p className="text-sm font-semibold text-primary-deep">{state.message}</p>;
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <Button
        type="button"
        size="medium"
        variant="neutral"
        onClick={handleClick}
        disabled={!hasConcepts || state.status === 'loading'}
        title={hasConcepts ? undefined : 'Sem conceitos fracos registrados para este aluno'}
        className="min-h-11 px-4 text-sm"
      >
        {state.status === 'loading' ? 'Gerando com Gemini…' : 'Gerar reforço'}
      </Button>
      {state.status === 'error' && (
        <p className="text-xs font-semibold text-danger">{state.message}</p>
      )}
    </div>
  );
};
