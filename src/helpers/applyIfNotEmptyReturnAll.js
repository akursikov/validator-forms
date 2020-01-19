import isEmpty from 'validator/lib/isEmpty';
import { sanitize } from './../utils';

const applyIfNotEmptyReturnAll = rules => value => {
  if (isEmpty(sanitize(value))) {
    return null;
  }
  return applyRulesReturnAll(rules)(value);
};

export default applyIfNotEmptyReturnAll;
