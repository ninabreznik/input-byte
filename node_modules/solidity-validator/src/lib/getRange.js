const BigNumber = require('bignumber.js');

import assertString from './util/assertString';

export default function getRange(type) {
  assertString(type);
  let range = {};

  if (type.search(/\buint/) != -1) {
    let bit = type.replace('uint', '');
    if (bit == '') bit = '256';
    bit = new BigNumber(bit);
    if (bit.isInteger()) {
      range = {
        MIN: 0,
        MAX: Math.pow(2, bit.toNumber()) - 1
      }
    }
  }

  if (type.search(/\bint/) != -1) {
    let bit = type.replace('int', '');
    if (bit == '') bit = '256';
    bit = new BigNumber(bit);
    if (bit.isInteger()) {
      range = {
        MIN: -(Math.pow(2, bit) / 2),
        MAX: (Math.pow(2, bit) / 2) - 1
      }
    }
  }
  return range;
}