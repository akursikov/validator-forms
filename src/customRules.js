import { isEmpty as _isEmpty, isLength as _isLength } from 'validator';
import { sanitize } from './utils';

export const lengthBetween = (msg, min, max) => val =>
  _isLength(sanitize(val), { min: min, max: max }) ? null : msg;

export const minLength = (msg, length) => val =>
  _isLength(sanitize(val), { min: length }) ? null : msg;

export const maxLength = (msg, length) => val =>
  _isLength(sanitize(val), { min: 0, max: length }) ? null : msg;

export const required = msg => val => (_isEmpty(sanitize(val)) ? msg : null);
