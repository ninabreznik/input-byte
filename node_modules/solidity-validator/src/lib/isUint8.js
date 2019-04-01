const BigNumber = require('bignumber.js');

import assertString from './util/assertString';

export default function isUint8(str) {
  assertString(str);
  let num = new BigNumber(str);
  return num.isInteger() && num.gte(0) && num.lte(Math.pow(2, 8) - 1);
}