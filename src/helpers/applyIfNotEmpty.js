import isEmpty from 'validator/lib/isEmpty';
import { sanitize } from './../utils';
import applyRules from './applyRules';

const applyIfNotEmpty = rules => value => {
  if (isEmpty(sanitize(value))) {
    return null;
  }
  return applyRules(rules)(value);
};

export default applyIfNotEmpty;
