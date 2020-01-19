import { isArray } from './../utils';

const applyRulesReturnAll = rules => value => {
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

export default applyRulesReturnAll;
