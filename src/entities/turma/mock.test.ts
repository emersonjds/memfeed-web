import { describe, expect, it } from 'vitest';
import { mockClassReport } from './mock';

describe('mockClassReport', () => {
  it('reflete os números do mock do app (mesmo contrato)', () => {
    expect(mockClassReport.className).toBe('2º ano B');
    expect(mockClassReport.studentCount).toBe(34);
    expect(mockClassReport.participation).toBe(91);
    expect(mockClassReport.retentionD7).toBe(74);
    expect(mockClassReport.retentionD30).toBe(58);
    expect(mockClassReport.lessons).toHaveLength(2);
  });
});
