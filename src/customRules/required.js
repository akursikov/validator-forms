import isEmpty from 'validator/lib/isEmpty';
import { sanitize } from './../utils';

const required = msg => val => (isEmpty(sanitize(val)) ? msg : null);

export default required;
