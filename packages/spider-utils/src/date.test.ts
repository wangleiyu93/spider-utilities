// date.test.ts
import { getDate } from './date';

describe('getDate', () => {
  it('should return a Date object', () => {
    const result = getDate();
    expect(result).toBeInstanceOf(Date);
  });

  it('should return the current date (roughly)', () => {
    const now = new Date();
    const result = getDate();

    // 时间差不要超过 1 秒
    expect(Math.abs(result.getTime() - now.getTime())).toBeLessThan(1000);
  });
});
