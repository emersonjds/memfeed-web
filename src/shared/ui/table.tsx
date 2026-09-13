import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

type WithClassName = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const Table = ({ children, className }: WithClassName) => (
  <table className={cn('w-full min-w-[560px] text-left', className)}>{children}</table>
);

export const TableHeader = ({ children, className }: WithClassName) => (
  <thead className={className}>{children}</thead>
);

export const TableBody = ({ children, className }: WithClassName) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow = ({ children, className }: WithClassName) => (
  <tr className={className}>{children}</tr>
);

type TableCellProps = WithClassName & {
  readonly isHeader?: boolean;
};

export const TableCell = ({ children, isHeader = false, className }: TableCellProps) => {
  const CellTag = isHeader ? 'th' : 'td';
  return <CellTag className={cn('px-3 py-3', className)}>{children}</CellTag>;
};
