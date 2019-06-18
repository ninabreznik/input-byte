const getMessage = require('./lib/getMessage')
const getRange = require('./lib/getRange')
const isAddress = require('./lib/isAddress')
const isBoolean = require('./lib/isBoolean')
const isInt = require('./lib/isInt')
const isUint = require('./lib/isUint')
const isValid = require('./lib/isValid')
const isBytes = require('./lib/isBytes')
const isByteArray = require('./lib/isByteArray')

const version = '0.1.2'
let validator = {
  version,
  isAddress,
  isBoolean,
  isInt8: str => isInt(str, 8),
  isUint8: str => isUint(str, 8),
  isValid,
  getRange,
  getMessage,
  isBytes: isByteArray,
  isByte: str => isBytes(str,1),
}

for (let i = 1; i <= 32; i++) {
  validator[`isBytes${i}`] = str => isBytes(str, i)
}

module.exports = validator
