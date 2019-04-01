import assertString from './util/assertString';
var Web3Utils = require('web3-utils');
import isValid from './isValid';

export default function getMessage(type, str) {
  assertString(str);
  if (isValid(type, str)) return '';
  if (type.search(/\buint/) != -1) return 'The value is an illegal range.';
  if (type.search(/\bint/) != -1) return 'The value is an illegal range.';
  if (type.search(/\bbool/) != -1) return 'The value is not a boolean.';
  if (type.search(/\baddress/) != -1) return 'The value is not a valid address.';
}