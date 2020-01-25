import { isArray } from './../utils';

function applyRules(rules) {
  let isArrayOfRules = isArray(rules);
  // always pass the checks if there is no rules provided
  if (!rules || (isArrayOfRules && rules.length == 0)) {
    return function alwaysPassValidation() {
      return null;
    };
  }
  if (isArrayOfRules) {
    return function validate(value) {
      for (let i = 0; i < rules.length; i++) {
        let error = rules[i](value);
        if (error) {
          return error;
        }
      }
      return null;
    };
  }
  return function validate(value) {
    return rules(value);
  };
}

export default applyRules;
