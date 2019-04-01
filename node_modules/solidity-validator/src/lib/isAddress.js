import assertString from './util/assertString';
var Web3Utils = require('web3-utils');

export default function isAddress(str) {
  assertString(str);
  return Web3Utils.isAddress(str);
}