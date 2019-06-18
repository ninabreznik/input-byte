// 不帶符號整型
const bigNumber = require('bignumber.js')
const assertString = require('./util/assertString')

module.exports = isUint

function isUint(str, exponent) {
  assertString(str)
  let num = bigNumber(str)
  return num.isInteger() && num.gte(0) && num.lte(Math.pow(2, exponent) - 1)
}
