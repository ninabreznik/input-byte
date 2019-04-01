const BigNumber = require('bignumber.js');

import assertString from './util/assertString';
import isAddress from './isAddress';
import isBoolean from './isBoolean';
import isInt8 from './isInt8';
import isUint8 from './isUint8';

export default function isValid(type, value) {
  assertString(type);
  assertString(value);
  if (type.search(/\buint/) != -1) return isUint8(value);
  if (type.search(/\bint/) != -1) return isInt8(value);
  if (type.search(/\bbool/) != -1) return isBoolean(value);
  if (type.search(/\baddress/) != -1) return isAddress(value);
  return true;
}