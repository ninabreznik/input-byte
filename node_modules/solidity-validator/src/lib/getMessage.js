const assertString = require('./util/assertString')
const isValid = require('./isValid')

module.exports = getMessage

function getMessage(type, str) {
  assertString(str)
  if (isValid(type, str)) return ''
  if (type.search(/\buint/) != -1) return 'The value is an illegal range.'
  if (type.search(/\bint/) != -1) return 'The value is an illegal range.'
  if (type.search(/\bbool/) != -1) return 'The value is not a boolean.'
  if (type.search(/\baddress/) != -1) return 'The value is not a valid address.'
  if (type.search(/\bbytes/) != -1) return 'The value is not a valid bytes.'
  if (type.search(/\bbyte/) != -1) return 'The value is not a valid byte.'
}
