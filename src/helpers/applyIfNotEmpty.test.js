import applyIfNotEmpty from './applyIfNotEmpty';
import * as CustomRules from './../customRules';

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
