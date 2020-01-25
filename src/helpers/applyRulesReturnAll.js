import { isArray } from './../utils';

function applyRulesReturnAll(rules) {
  let isArrayOfRules = isArray(rules);
  // always pass the checks if there is no rules provided
  if (!rules || (isArrayOfRules && rules.length == 0)) {
    return function alwaysPassValidation() {
      return null;
    };
  }
  if (isArrayOfRules) {
    return function validate(value) {
      let errors = [];
      for (let i = 0; i < rules.length; i++) {
        let error = rules[i](value);
        if (error) {
          errors.push(error);
        }
      }
      return errors.length > 0 ? errors : null;
    };
  }
  return function validate(value) {
    return rules(value);
  };
}

export default applyRulesReturnAll;
