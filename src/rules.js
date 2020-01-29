import * as validator from 'validator';
import { sanitize } from './utils';

export const equals = (msg, comparison) => val =>
  validator.equals(sanitize(val), comparison) ? null : msg;

export const isAfter = (msg, date) => val =>
  validator.isAfter(sanitize(val), date) ? null : msg;

export const isAlpha = (msg, locale) => val =>
  validator.isAlpha(sanitize(val), locale) ? null : msg;

export const isAlphanumeric = (msg, locale) => val =>
  validator.isAlphanumeric(sanitize(val), locale) ? null : msg;

export const isAscii = msg => val =>
  validator.isAscii(sanitize(val)) ? null : msg;

export const isBase64 = msg => val =>
  validator.isBase64(sanitize(val)) ? null : msg;

export const isBefore = (msg, date) => val =>
  validator.isBefore(sanitize(val), date) ? null : msg;

export const isBoolean = msg => val =>
  validator.isBoolean(sanitize(val)) ? null : msg;

export const isByteLength = (msg, options) => val =>
  validator.isByteLength(sanitize(val), options) ? null : msg;

export const isCreditCard = msg => val =>
  validator.isCreditCard(sanitize(val)) ? null : msg;

export const isCurrency = (msg, options) => val =>
  validator.isCurrency(sanitize(val), options) ? null : msg;

export const isDataURI = msg => val =>
  validator.isDataURI(sanitize(val)) ? null : msg;

export const isMagnetURI = msg => val =>
  validator.isMagnetURI(sanitize(val)) ? null : msg;

export const isDecimal = (msg, options) => val =>
  validator.isDecimal(sanitize(val), options) ? null : msg;

export const isDivisibleBy = (msg, number) => val =>
  validator.isDivisibleBy(sanitize(val), number) ? null : msg;

export const isEmail = (msg, options) => val =>
  validator.isEmail(sanitize(val), options) ? null : msg;

export const isEmpty = (msg, options) => val =>
  validator.isEmpty(sanitize(val), options) ? null : msg;

export const isFQDN = (msg, options) => val =>
  validator.isFQDN(sanitize(val), options) ? null : msg;

export const isFloat = (msg, options) => val =>
  validator.isFloat(sanitize(val), options) ? null : msg;

export const isFullWidth = msg => val =>
  validator.isFullWidth(sanitize(val)) ? null : msg;

export const isHalfWidth = msg => val =>
  validator.isHalfWidth(sanitize(val)) ? null : msg;

export const isHash = (msg, algorithm) => val =>
  validator.isHash(sanitize(val), algorithm) ? null : msg;

export const isHexColor = msg => val =>
  validator.isHexColor(sanitize(val)) ? null : msg;

export const isHexadecimal = msg => val =>
  validator.isHexadecimal(sanitize(val)) ? null : msg;

export const isIdentityCard = (msg, locale) => val =>
  validator.isIdentityCard(sanitize(val), locale) ? null : msg;

export const isInt = (msg, options) => val =>
  validator.isInt(sanitize(val), options) ? null : msg;

export const isIP = (msg, version) => val =>
  validator.isIP(sanitize(val), version) ? null : msg;

export const isIPRange = msg => val =>
  validator.isIPRange(sanitize(val)) ? null : msg;

export const isISBN = (msg, version) => val =>
  validator.isISBN(sanitize(val), version) ? null : msg;

export const isISSN = (msg, version) => val =>
  validator.isISSN(sanitize(val), version) ? null : msg;

export const isISIN = msg => val =>
  validator.isISIN(sanitize(val)) ? null : msg;

export const isISO8601 = msg => val =>
  validator.isISO8601(sanitize(val)) ? null : msg;

export const isRFC3339 = msg => val =>
  validator.isRFC3339(sanitize(val)) ? null : msg;

export const isISO31661Alpha2 = msg => val =>
  validator.isISO31661Alpha2(sanitize(val)) ? null : msg;

export const isISO31661Alpha3 = msg => val =>
  validator.isISO31661Alpha3(sanitize(val)) ? null : msg;

export const isISRC = msg => val =>
  validator.isISRC(sanitize(val)) ? null : msg;

export const isIn = (msg, values) => val =>
  validator.isIn(sanitize(val), values) ? null : msg;

export const isJSON = msg => val =>
  validator.isJSON(sanitize(val)) ? null : msg;

export const isJWT = msg => val =>
  validator.isJWT(sanitize(val)) ? null : msg;

export const isLatLong = msg => val =>
  validator.isLatLong(sanitize(val)) ? null : msg;

export const isLength = (msg, options) => val =>
  validator.isLength(sanitize(val), options) ? null : msg;

export const isLowercase = msg => val =>
  validator.isLowercase(sanitize(val)) ? null : msg;

export const isMACAddress = msg => val =>
  validator.isMACAddress(sanitize(val)) ? null : msg;

export const isMD5 = msg => val =>
  validator.isMD5(sanitize(val)) ? null : msg;

export const isMimeType = msg => val =>
  validator.isMimeType(sanitize(val)) ? null : msg;

export const isMobilePhone = (msg, locale, options) => val =>
  validator.isMobilePhone(sanitize(val), locale, options) ? null : msg;

export const isMongoId = msg => val =>
  validator.isMongoId(sanitize(val)) ? null : msg;

export const isMultibyte = msg => val =>
  validator.isMultibyte(sanitize(val)) ? null : msg;

export const isNumeric = (msg, options) => val =>
  validator.isNumeric(sanitize(val), options) ? null : msg;

export const isPort = msg => val =>
  validator.isPort(sanitize(val)) ? null : msg;

export const isPostalCode = (msg, locale) => val =>
  validator.isPostalCode(sanitize(val), locale) ? null : msg;

export const isSurrogatePair = msg => val =>
  validator.isSurrogatePair(sanitize(val)) ? null : msg;

export const isURL = (msg, options) => val =>
  validator.isURL(sanitize(val), options) ? null : msg;

export const isUUID = (msg, version) => val =>
  validator.isUUID(sanitize(val), version) ? null : msg;

export const isUppercase = msg => val =>
  validator.isUppercase(sanitize(val)) ? null : msg;

export const isVariableWidth = msg => val =>
  validator.isVariableWidth(sanitize(val)) ? null : msg;

export const isWhitelisted = (msg, chars) => val =>
  validator.isWhitelisted(sanitize(val), chars) ? null : msg;

export const matches = (msg, pattern, modifiers) => val =>
  validator.matches(sanitize(val), pattern, modifiers) ? null : msg;
