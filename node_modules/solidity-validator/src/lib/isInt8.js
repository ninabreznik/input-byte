const BigNumber = require('bignumber.js');

import assertString from './util/assertString';

export default function isInt8(str) {
  assertString(str);
  let num = new BigNumber(str);
  return num.isInteger() && num.gte(-(Math.pow(2, 8) / 2)) && num.lte((Math.pow(2, 8) / 2) - 1);
}