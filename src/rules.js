import {
  isLength as _isLength,
  isEmpty as _isEmpty,
  isEmail as _isEmail,
  isInt as _isInt,
  isAlpha as _isAlpha,
  matches as _matches,
  isHexColor as _isHexColor,
} from 'validator';
import { sanitize } from './utils';

export const isEmpty = (msg, options) => val =>
  _isEmpty(sanitize(val), options) ? null : msg;

export const isEmail = (msg, options) => val =>
  _isEmail(sanitize(val), options) ? null : msg;

export const isInt = (msg, options) => val =>
  _isInt(sanitize(val), options) ? null : msg;

export const isAlpha = (msg, locale) => val =>
  _isAlpha(sanitize(val), locale) ? null : msg;

export const isHexColor = msg => val =>
  _isHexColor(sanitize(val)) ? null : msg;

export const matches = (msg, regexp) => val =>
  _matches(sanitize(val), regexp) ? null : msg;
