import * as Rules from './rules';

const errorMessage = 'oops';

test('should pass contains', () => {
  expect(Rules.contains(errorMessage, 'es')('test')).toBe(null);
});

test('should not pass contains', () => {
  expect(Rules.contains(errorMessage, 'hi')('test')).toBe('oops');
});

test('should pass equals', () => {
  expect(Rules.equals(errorMessage, 'test')('test')).toBe(null);
});

test('should not pass equals', () => {
  expect(Rules.equals(errorMessage, 'hi')('test')).toBe('oops');
});

test('should pass isAfter', () => {
  expect(Rules.isAfter(errorMessage, '12.05.2010')('12.05.2030')).toBe(null);
});

test('should not pass isAfter', () => {
  expect(Rules.isAfter(errorMessage, '12.05.2030')('12/05/2010')).toBe('oops');
});

test('should pass isAscii', () => {
  expect(Rules.isAscii(errorMessage)('test<*>test')).toBe(null);
});

test('should not pass isAscii', () => {
  expect(Rules.isAscii(errorMessage)('test±test')).toBe('oops');
});

test('should pass isBase64', () => {
  expect(Rules.isBase64(errorMessage)('dGVzdA==')).toBe(null);
});

test('should not pass isBase64', () => {
  expect(Rules.isBase64(errorMessage)('==dGVzdA')).toBe('oops');
});

test('should pass isBefore', () => {
  expect(Rules.isBefore(errorMessage, '12.05.2030')('12/05/2010')).toBe(null);
});

test('should not pass isBefore', () => {
  expect(Rules.isBefore(errorMessage, '12.05.2010')('12.05.2030')).toBe('oops');
});

test('should pass isBoolean', () => {
  expect(Rules.isBoolean(errorMessage)('true')).toBe(null);
});

test('should not pass isBoolean', () => {
  expect(Rules.isBoolean(errorMessage)('hi')).toBe('oops');
});

test('should pass isByteLength', () => {
  expect(Rules.isByteLength(errorMessage, { max: 4 })('test')).toBe(null);
});

test('should not pass isByteLength', () => {
  expect(Rules.isByteLength(errorMessage, { max: 4 })('testtest')).toBe('oops');
});

test('should pass isCreditCard', () => {
  expect(Rules.isCreditCard(errorMessage)('4111 1111 1111 1111')).toBe(null);
});

test('should not pass isCreditCard', () => {
  expect(Rules.isCreditCard(errorMessage)('5111 1111 1111 1111')).toBe('oops');
});

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
