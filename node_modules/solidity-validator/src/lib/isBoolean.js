const assertString = require('./util/assertString')

module.exports = isBoolean

function isBoolean(str) {
  assertString(str)
  return ['true', 'false'].indexOf(str) >= 0
}
