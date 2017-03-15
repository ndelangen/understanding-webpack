import * as b from '../lib-b';

describe('sanity', () => {
  it('should exist', () => {
    expect(b).toBeDefined();
  });
  it('should contain the right methods', () => {
    expect(Object.keys(b)).toMatchSnapshot();
  });
});

describe('functional', () => {
  it('should not throw', () => {
    expect(b.bar).not.toThrow();
  });
  it('should work correctly', () => {
    expect(b.bar(1)).toBe(2);
    expect(b.bar(2)).toBe(3);
    expect(b.bar(65)).toBe(66);
  });
  it('should work with invalid data', () => {
    expect(b.bar('1')).toBe('11');
    expect(b.bar('a')).toBe('a1');
    expect(b.bar(NaN)).toBeNaN();
    expect(b.bar(undefined)).toBeNaN();
  });
});
