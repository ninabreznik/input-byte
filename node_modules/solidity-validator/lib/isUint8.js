"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUint8;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigNumber = require('bignumber.js');

function isUint8(str) {
  (0, _assertString.default)(str);
  var num = new BigNumber(str);
  return num.isInteger() && num.gte(0) && num.lte(Math.pow(2, 8) - 1);
}

module.exports = exports.default;