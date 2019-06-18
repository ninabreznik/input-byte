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
  if (type.search(/\bbytes/) != -1) return isBytes(value, type.substring(5))
  if (type.search(/\bbyte/) != -1) return isBytes(value, type.substring(4))
  return true
}
