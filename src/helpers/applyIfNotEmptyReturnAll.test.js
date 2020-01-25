import applyIfNotEmptyReturnAll from './applyIfNotEmptyReturnAll';
import * as CustomRules from './../customRules';

test('not empty, should pass the only check', () => {
  expect(
    applyIfNotEmptyReturnAll(CustomRules.minLength('too short', 2))('test')
  ).toBe(null);
});

test('not empty, should pass both checks', () => {
  expect(
    applyIfNotEmptyReturnAll([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])('test')
  ).toBe(null);
});

test('not empty, should fail the first check, too short', () => {
  expect(
    applyIfNotEmptyReturnAll([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])('t')
  ).toStrictEqual(['oops too short']);
});

test('not empty, should fail the second check, too long', () => {
  expect(
    applyIfNotEmptyReturnAll([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])('testtesttest')
  ).toStrictEqual(['oops too long']);
});

test('empty, should not check', () => {
  expect(
    applyIfNotEmptyReturnAll([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])('')
  ).toBe(null);
});

test('null, should not check', () => {
  expect(
    applyIfNotEmptyReturnAll([
      CustomRules.minLength('oops too short', 2),
      CustomRules.maxLength('oops too long', 10),
    ])(null)
  ).toBe(null);
});
