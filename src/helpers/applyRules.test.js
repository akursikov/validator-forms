import applyRules from './applyRules';
import * as CustomRules from './../customRules';
import * as Rules from './../rules';

test('should pass both checks', () => {
  expect(
    applyRules([
      CustomRules.required('oops required'),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('test')
  ).toBe(null);
});

test('should fail on the first check, too short', () => {
  expect(
    applyRules([
      CustomRules.minLength('oops too short', 10),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('test')
  ).toBe('oops too short');
});

test('should fail on the second check, contains a digit', () => {
  expect(
    applyRules([
      CustomRules.minLength('oops too short', 10),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('I have 1 digit')
  ).toBe('oops alpha');
});

test('not empty, should pass the only check', () => {
  expect(applyRules(CustomRules.maxLength('oops too long', 10))('test')).toBe(
    null
  );
});

test('not empty, should pass without rules', () => {
  expect(applyRules()('test')).toBe(null);
});
