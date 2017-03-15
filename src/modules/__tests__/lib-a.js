import * as a from '../lib-a';

describe('sanity', () => {
  it('should exist', () => {
    expect(a).toBeDefined();
  });
  it('should contain the right methods', () => {
    expect(Object.keys(a)).toMatchSnapshot();
  });
});

describe('functional', () => {
  describe('MY_CONST', () => {
    it('should be defined', () => {
      expect(a.MY_CONST).toBeDefined();
    });
  });

  describe('default', () => {
    it('should be defined', () => {
      expect(a.default).toBeDefined();
    });
  });

  describe('default', () => {
    it('should be defined', () => {
      expect(a.default).toBeDefined();
    });
  });

  describe('myFunc', () => {
    it('should not throw', () => {
      expect(a.myFunc).not.toThrow();
    });
    it('should return MY_CONST', () => {
      expect(a.myFunc()).toBe(a.MY_CONST);
    });
  });

  describe('myArrowFunc', () => {
    it('should not throw', () => {
      expect(a.myArrowFunc).not.toThrow();
    });
    it('should return MY_CONST', () => {
      expect(a.myArrowFunc()).toBe(a.MY_CONST);
    });
  });

  describe('MyClass', () => {
    it('should return an instance with property `foo`', () => {
      expect(new a.MyClass()).toEqual({ foo: a.MY_CONST });
    });
  });
});
