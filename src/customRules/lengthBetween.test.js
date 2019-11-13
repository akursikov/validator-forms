import lengthBetween from './lengthBetween';

const errorMessage = 'oops';

test('should pass lengthBetween', () => {
  expect(lengthBetween(errorMessage, 2, 6)('test')).toBe(null);
});

test('should not pass lengthBetween, too long', () => {
  expect(lengthBetween(errorMessage, 2, 6)('testtest')).toBe(errorMessage);
});

test('should not pass lengthBetween, too short', () => {
  expect(lengthBetween(errorMessage, 2, 6)('t')).toBe(errorMessage);
});
