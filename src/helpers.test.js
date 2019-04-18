import { applyRules, applyIfNotEmpty } from './helpers';
import * as CustomRules from './customRules';
import * as Rules from './rules';

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

test('not empty, should pass the only check', () => {
  expect(applyIfNotEmpty(CustomRules.minLength('too short', 2))('test')).toBe(
    null
  );
});

test('not empty, should pass both checks', () => {
  expect(
    applyIfNotEmpty(
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too short', 10)
    )('test')
  ).toBe(null);
});

test('not empty, should fail the first check, too short', () => {
  expect(
    applyIfNotEmpty(
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too short', 10)
    )('t')
  ).toBe('oops too short');
});

test('not empty, should fail the second check, too long', () => {
  expect(
    applyIfNotEmpty([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])('testtesttest')
  ).toBe('oops too long');
});

test('empty, should not check', () => {
  expect(
    applyIfNotEmpty([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])('')
  ).toBe(null);
});

test('null, should not check', () => {
  expect(
    applyIfNotEmpty([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])(null)
  ).toBe(null);
});
