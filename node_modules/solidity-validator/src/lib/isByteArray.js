const assertString = require('./util/assertString')

module.exports = isByteArray

const hexRegularPattern = new RegExp(/^0x[0-9a-fA-F]+/)

function isByteArray(str) {
  assertString(str)
  const byteSize = (str.length - 2) / 2
  return byteSize >= 1 && byteSize <= 32 && hexRegularPattern.test(str)
}