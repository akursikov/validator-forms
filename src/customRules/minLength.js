import { isLength } from 'validator';
import { sanitize } from './../utils';

const minLength = (msg, length) => val =>
  isLength(sanitize(val), { min: length }) ? null : msg;

export default minLength;
