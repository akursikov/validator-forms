import applyRulesReturnAll from './applyRulesReturnAll';
import * as CustomRules from './../customRules';
import * as Rules from './../rules';

test('should pass both checks', () => {
  expect(
    applyRulesReturnAll([
      CustomRules.required('oops required'),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('test')
  ).toBe(null);
});

test('should fail on the first check, too short', () => {
  expect(
    applyRulesReturnAll([
      CustomRules.minLength('oops too short', 10),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('test')
  ).toStrictEqual(['oops too short']);
});

test('should fail on the second check, contains a digit', () => {
  expect(
    applyRulesReturnAll([
      CustomRules.minLength('oops too short', 10),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('I have 1 digit')
  ).toStrictEqual(['oops alpha']);
});

test('should fail on both checks', () => {
  expect(
    applyRulesReturnAll([
      CustomRules.minLength('oops too short', 50),
      Rules.isAlpha('oops alpha', 'en-US'),
    ])('I have 1 digit')
  ).toStrictEqual(['oops too short', 'oops alpha']);
});

test('should pass the only check', () => {
  expect(
    applyRulesReturnAll(CustomRules.maxLength('oops too long', 10))('test')
  ).toBe(null);
});

test('should pass without rules', () => {
  expect(applyRulesReturnAll()('test')).toBe(null);
});
