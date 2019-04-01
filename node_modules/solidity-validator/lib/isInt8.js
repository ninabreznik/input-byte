"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt8;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigNumber = require('bignumber.js');

function isInt8(str) {
  (0, _assertString.default)(str);
  var num = new BigNumber(str);
  return num.isInteger() && num.gte(-(Math.pow(2, 8) / 2)) && num.lte(Math.pow(2, 8) / 2 - 1);
}

module.exports = exports.default;