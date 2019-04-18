import * as Rules from './rules';

const errorMessage = 'oops';

test('should pass isEmpty', () => {
  expect(Rules.isEmpty(errorMessage)('')).toBe(null);
});

test('should not pass isEmpty', () => {
  expect(Rules.isEmpty(errorMessage)('test')).toBe('oops');
});

test('should pass isEmail', () => {
  expect(Rules.isEmail(errorMessage)('me@home.ru')).toBe(null);
});

test('should not pass isEmail', () => {
  expect(Rules.isEmail(errorMessage)('me@home@ru')).toBe('oops');
});

test('should pass isInt', () => {
  expect(Rules.isInt(errorMessage)(1)).toBe(null);
});

test('should not pass isInt', () => {
  expect(Rules.isInt(errorMessage)(1.6)).toBe('oops');
});

test('should pass isAlpha', () => {
  expect(Rules.isAlpha(errorMessage, 'en-US')('test')).toBe(null);
});

test('should not pass isAlpha', () => {
  expect(Rules.isAlpha(errorMessage, 'en-US')('test1')).toBe('oops');
});

test('should pass isHexColor', () => {
  expect(Rules.isHexColor(errorMessage)('#123')).toBe(null);
});

test('should not pass isHexColor', () => {
  expect(Rules.isHexColor(errorMessage)('test')).toBe('oops');
});

test('should pass matches', () => {
  expect(Rules.matches(errorMessage, 'es')('test')).toBe(null);
});

test('should not pass matches', () => {
  expect(Rules.matches(errorMessage, 'es')('hello')).toBe('oops');
});
