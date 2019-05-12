import * as Rules from './customRules';

const errorMessage = 'oops';

test('should pass lengthBetween', () => {
  expect(Rules.lengthBetween(errorMessage, 2, 6)('test')).toBe(null);
});

test('should not pass lengthBetween, too long', () => {
  expect(Rules.lengthBetween(errorMessage, 2, 6)('testtest')).toBe(
    errorMessage
  );
});

test('should not pass lengthBetween, too short', () => {
  expect(Rules.lengthBetween(errorMessage, 2, 6)('t')).toBe(errorMessage);
});

test('should pass minLength', () => {
  expect(Rules.minLength(errorMessage, 2)('test')).toBe(null);
});

test('should not pass minLength, too short', () => {
  expect(Rules.minLength(errorMessage, 2)('t')).toBe(errorMessage);
});

test('should pass maxLength', () => {
  expect(Rules.maxLength(errorMessage, 6)('test')).toBe(null);
});

test('should not pass maxLength, too long', () => {
  expect(Rules.maxLength(errorMessage, 6)('testtest')).toBe(errorMessage);
});

test('should pass required', () => {
  expect(Rules.required(errorMessage)('test')).toBe(null);
});

test('should not pass required, provided null', () => {
  expect(Rules.required(errorMessage)(null)).toBe(errorMessage);
});

test('should not pass required, provided empty string', () => {
  expect(Rules.required(errorMessage)('')).toBe(errorMessage);
});
