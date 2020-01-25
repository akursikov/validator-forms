import isEmpty from 'validator/lib/isEmpty';
import { sanitize } from './../utils';
import applyRulesReturnAll from './applyRulesReturnAll';

function applyIfNotEmptyReturnAll(rules) {
  return function validate(value) {
    if (isEmpty(sanitize(value))) {
      return null;
    }
    return applyRulesReturnAll(rules)(value);
  };
}

export default applyIfNotEmptyReturnAll;
