// 帶符號整型
const BigNumber = require('bignumber.js')
const assertString = require('./util/assertString')

module.exports = isInt

function isInt(str, exponent) {
  assertString(str)
  let num = new BigNumber(str)
  return (
    num.isInteger() &&
    num.gte(-(Math.pow(2, exponent) / 2)) &&
    num.lte(Math.pow(2, exponent) / 2 - 1)
  )
}
