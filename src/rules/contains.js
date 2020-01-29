import validatorContains from 'validator/lib/isEmail';

const contains = (msg, seed) => val =>
  validatorContains(sanitize(val), seed) ? null : msg;

export default contains;
