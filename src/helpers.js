import isEmpty from 'validator/lib/isEmpty';
import { sanitize, isArray } from './utils';

export function applyRules(rules) {
  // always pass the checks if there is no rules provided
  if (!rules || (isArray(rules) && rules.length === 0)) {
    return function() {
      return null;
    };
  }
  if (isArray(rules)) {
    return function(value) {
      for (var i = 0; i < rules.length; i++) {
        const error = rules[i](value);
        if (error) {
          return error;
        }
      }
      return null;
    };
  }
  return function(value) {
    return rules(value);
  };
}

export const applyRulesReturnAll = rules => value => {
  let errors = [];
  if (isArray(rules)) {
    for (var i = 0; i < rules.length; i++) {
      const error = rules[i](value);
      if (error) {
        errors.push(error);
      }
    }
    return errors.length > 0 ? errors : null;
  }
  const error = rules(value);
  return error;
};

export const applyIfNotEmpty = rules => value => {
  if (isEmpty(sanitize(value))) {
    return null;
  }
  return applyRules(rules)(value);
};

export const applyIfNotEmptyReturnAll = rules => value => {
  if (isEmpty(sanitize(value))) {
    return null;
  }
  return applyRulesReturnAll(rules)(value);
};
