import { isLength } from 'validator';
import { sanitize } from './../utils';

const maxLength = (msg, length) => val =>
  isLength(sanitize(val), { min: 0, max: length }) ? null : msg;

export default maxLength;
