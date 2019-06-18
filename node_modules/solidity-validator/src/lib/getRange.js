const bigNumber = require('bignumber.js')
const assertString = require('./util/assertString')

module.exports = getRange

function getRange(type) {
  assertString(type)
  if (type.search(/\buint/) != -1) return getUintRange(type)
  if (type.search(/\bint/) != -1) return getIntRange(type)
  return
}

function getUintRange(type) {
  let exponent = type.replace('uint', '')
  if (exponent == '') exponent = '256'
  exponent = bigNumber(exponent)
  if (exponent.isInteger()) {
    let range = {
      MIN: 0,
      MAX: bigNumber(2)
        .pow(exponent)
        .minus(1)
        .toFixed(),
    }
    return range
  }
}

function getIntRange(type) {
  let exponent = type.replace('int', '')
  if (exponent == '') exponent = '256'
  exponent = bigNumber(exponent)
  if (exponent.isInteger()) {
    let range = {
      MIN: bigNumber(2)
        .pow(exponent)
        .div(2)
        .times(-1)
        .toFixed(),
      MAX: bigNumber(2)
        .pow(exponent)
        .div(2)
        .minus(1)
        .toFixed(),
    }
    return range
  }
}
