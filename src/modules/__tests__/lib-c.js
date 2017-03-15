import * as c from '../lib-c';

describe('sanity', () => {
  it('should exist', () => {
    expect(c).toBeDefined();
  });
  it('should contain the right methods', () => {
    expect(Object.keys(c)).toMatchSnapshot();
  });
});
