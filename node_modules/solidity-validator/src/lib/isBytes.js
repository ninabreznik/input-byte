// byte is an alias for bytes1
const assertString = require('./util/assertString')

module.exports = isBytes

const hexRegularPattern = new RegExp(/^0x[0-9a-fA-F]+/)

function isBytes(str, exponent) {
  assertString(str)
  const byteSize = (str.length - 2) / 2
  return byteSize <= exponent && hexRegularPattern.test(str)
}
