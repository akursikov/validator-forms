import isLength from 'validator/lib/isLength';
import { sanitize } from './../utils';

const lengthBetween = (msg, min, max) => val =>
  isLength(sanitize(val), { min: min, max: max }) ? null : msg;

export default lengthBetween;
