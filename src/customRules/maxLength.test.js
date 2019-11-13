import maxLength from './maxLength';

const errorMessage = 'oops';

test('should pass maxLength', () => {
  expect(maxLength(errorMessage, 6)('test')).toBe(null);
});

test('should not pass maxLength, too long', () => {
  expect(maxLength(errorMessage, 6)('testtest')).toBe(errorMessage);
});
