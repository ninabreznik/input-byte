# solidity-validator.js

![Travis](https://img.shields.io/travis/alincode/solidity-validator.js.svg)
[![codecov](https://codecov.io/gh/alincode/solidity-validator.js/branch/master/graph/badge.svg)](https://codecov.io/gh/alincode/solidity-validator.js)
![npm downloads](https://img.shields.io/npm/dt/solidity-validator.svg)
[![Dependency Status](https://img.shields.io/david/alincode/solidity-validator.js.svg?style=flat)](https://david-dm.org/alincode/solidity-validator.js)
[![NPM version][npm-image]][npm-url] 

A library of string validators.

### Installation and Usage

```
npm install solidity-validator
```

### Function

| Validator                 | Description                           |
|---------------------------|---------------------------------------|
| **isAddress(str)**        | check if a string is a address.       |
| **isBoolean(str)**        | check if a string is a boolean.       |
| **isInt8(str)**           | check if a string is a int8.          |
| **isUint8(str)**          | check if a string is a uint8.         |
| **isBytesN(str)**         | check if a string is a BytesN, N:1-32 |
| **isByte(str)**           | check if a string is a Bytes1         |
| **isBytes(str)**          | check if a string is a Byte1 ~ Byte32 |
| **isValid(type, str)**    | check if a string is match the type   |
| **getRange(type)**        | get type MIN and MAX range            |
| **getMessage(type, str)** | get valid message                     |

### Example

```js
var validator = require('solidity-validator');

validator.isAddress('0xa77451687Ee77cB3DFf16A24446C54DB76C80222'); // true
validator.isAddress('0xa77451687Ee77cB3DFf16A24446C54DB76C80223'); // false

validator.isBoolean('true'); // true
validator.isBoolean('false'); // true
validator.isBoolean('1'); // false
validator.isBoolean('0'); // false

validator.isInt8('-128'); // true
validator.isInt8('127'); // true
validator.isInt8('128'); // false

validator.isUint8('0'); // true
validator.isUint8('255'); // true
validator.isUint8('0.1'); // false
validator.isUint8('-1'); // false
validator.isUint8('256'); // false

validator.isBytes1('0x00'); // true
validator.isBytes1('0xff'); // true
validator.isBytes1('0xgg'); // false
validator.isBytes1('0x'); // false
validator.isBytes2('0x0000'); // true
validator.isBytes2('0xffff'); // true
validator.isBytes2('0xgggg'); // false
validator.isBytes2('0xff'); // false

validator.isByte('0x00'); // true
validator.isByte('0xff'); // true
validator.isByte('0xgg'); // false
validator.isByte('0x'); // false

validator.isBytes('0x00'); // true
validator.isBytes('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'); // true
validator.isBytes('0xgg'); // false
validator.isBytes('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'); // false

validator.isValid('uint', "123"); // true
validator.isValid('uint', "280"); // false
validator.isValid('address', "ooooooxxxxx"); // false

validator.getMessage('uint8', '255');
validator.getMessage('address', '0xa77451687Ee77cB3DFf16A24446C54DB76C80222');
validator.getMessage('int8', '129'); // The value is an illegal range.
validator.getMessage('uint8', '256'); // The value is an illegal range.
validator.getMessage('bool', '0'); // The value is not a boolean.
validator.getMessage('address', 'oooooxxxx'); // The value is not a valid address.
validator.getMessage('byte', 'oooooxxxx'); // The value is not a valid byte.
```

```js
validator.getRange('int8');

/* === output ===
{
  MIN: -128,
  MAX: 127
}
*/
```

### Tests

Tests are using mocha, to run the tests use:

```sh
npm test
```

### Maintainers

- [alincode](https://github.com/alincode) - **AILIN LIOU** (author)

### License
MIT © [alincode](https://github.com/alincode)

[npm-url]: https://npmjs.org/package/solidity-validator
[npm-image]: http://img.shields.io/npm/v/solidity-validator.svg