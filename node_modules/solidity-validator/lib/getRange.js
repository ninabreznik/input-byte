"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRange;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigNumber = require('bignumber.js');

function getRange(type) {
  (0, _assertString.default)(type);
  var range = {};

  if (type.search(/\buint/) != -1) {
    var bit = type.replace('uint', '');
    if (bit == '') bit = '256';
    bit = new BigNumber(bit);

    if (bit.isInteger()) {
      range = {
        MIN: 0,
        MAX: Math.pow(2, bit.toNumber()) - 1
      };
    }
  }

  if (type.search(/\bint/) != -1) {
    var _bit = type.replace('int', '');

    if (_bit == '') _bit = '256';
    _bit = new BigNumber(_bit);

    if (_bit.isInteger()) {
      range = {
        MIN: -(Math.pow(2, _bit) / 2),
        MAX: Math.pow(2, _bit) / 2 - 1
      };
    }
  }

  return range;
}

module.exports = exports.default;