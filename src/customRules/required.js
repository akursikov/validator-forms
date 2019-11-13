import { isEmpty } from 'validator';
import { sanitize } from './../utils';

const required = msg => val => (isEmpty(sanitize(val)) ? msg : null);

export default required;
