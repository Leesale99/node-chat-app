const { isRealString } = require('./utils/validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const str = 98;

    expect(isRealString(str)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    const str = '   ';

    expect(isRealString(str)).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    const str = '  string  ';

    expect(isRealString(str)).toBeTruthy();
  });
});
