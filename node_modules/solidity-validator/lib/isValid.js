"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValid;

var _assertString = _interopRequireDefault(require("./util/assertString"));

var _isAddress = _interopRequireDefault(require("./isAddress"));

var _isBoolean = _interopRequireDefault(require("./isBoolean"));

var _isInt = _interopRequireDefault(require("./isInt8"));

var _isUint = _interopRequireDefault(require("./isUint8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigNumber = require('bignumber.js');

function isValid(type, value) {
  (0, _assertString.default)(type);
  (0, _assertString.default)(value);
  if (type.search(/\buint/) != -1) return (0, _isUint.default)(value);
  if (type.search(/\bint/) != -1) return (0, _isInt.default)(value);
  if (type.search(/\bbool/) != -1) return (0, _isBoolean.default)(value);
  if (type.search(/\baddress/) != -1) return (0, _isAddress.default)(value);
  return true;
}

module.exports = exports.default;