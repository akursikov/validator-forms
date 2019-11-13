import required from './required';

const errorMessage = 'oops';

test('should pass required', () => {
  expect(required(errorMessage)('test')).toBe(null);
});

test('should not pass required, provided null', () => {
  expect(required(errorMessage)(null)).toBe(errorMessage);
});

test('should not pass required, provided empty string', () => {
  expect(required(errorMessage)('')).toBe(errorMessage);
});
