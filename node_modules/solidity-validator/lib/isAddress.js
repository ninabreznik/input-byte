"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAddress;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Web3Utils = require('web3-utils');

function isAddress(str) {
  (0, _assertString.default)(str);
  return Web3Utils.isAddress(str);
}

module.exports = exports.default;