import minLength from './minLength';

const errorMessage = 'oops';

test('should pass minLength', () => {
  expect(minLength(errorMessage, 2)('test')).toBe(null);
});

test('should not pass minLength, too short', () => {
  expect(minLength(errorMessage, 2)('t')).toBe(errorMessage);
});
