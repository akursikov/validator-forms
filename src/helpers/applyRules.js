import { isArray } from './../utils';

function applyRules(rules) {
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

export default applyRules;
