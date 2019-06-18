const assertString = require('./util/assertString')
var Web3Utils = require('web3-utils')

module.exports = isAddress

function isAddress(str) {
  assertString(str)
  return Web3Utils.isAddress(str)
}
