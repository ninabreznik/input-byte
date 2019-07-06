const assertString = require('./util/assertString')
const isAddress = require('./isAddress')
const isBoolean = require('./isBoolean')
const isInt = require('./isInt')
const isUint = require('./isUint')
const isBytes = require('./isBytes')

module.exports = isValid

function isValid(type, value) {
  assertString(type)
  assertString(value)
  if (type.search(/\buint/) != -1) return isUint(value, type.substring(4))
  if (type.search(/\bint/) != -1) return isInt(value, type.substring(3))
  if (type.search(/\bbool/) != -1) return isBoolean(value)
  if (type.search(/\baddress/) != -1) return isAddress(value)
  if (type.search(/\bbytes/) != -1) {
    let len = 5
    let exponent = type.length == len ? 32 : parseInt(type.substring(len))
    return isBytes(value, exponent)
  }
  if (type.search(/\bbyte/) != -1) {
    let len = 4
    let exponent = type.length == len ? 1 : parseInt(type.substring(len))
    return isBytes(value, exponent)
  }
  return true
}
