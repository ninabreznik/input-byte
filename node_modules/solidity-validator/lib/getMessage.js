"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMessage;

var _assertString = _interopRequireDefault(require("./util/assertString"));

var _isValid = _interopRequireDefault(require("./isValid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Web3Utils = require('web3-utils');

function getMessage(type, str) {
  (0, _assertString.default)(str);
  if ((0, _isValid.default)(type, str)) return '';
  if (type.search(/\buint/) != -1) return 'The value is an illegal range.';
  if (type.search(/\bint/) != -1) return 'The value is an illegal range.';
  if (type.search(/\bbool/) != -1) return 'The value is not a boolean.';
  if (type.search(/\baddress/) != -1) return 'The value is not a valid address.';
}

module.exports = exports.default;