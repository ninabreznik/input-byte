# solidity-validator.js

[![NPM version][npm-image]][npm-url] 

A library of string validators.

### Installation and Usage

```
npm install solidity-validator
```

### Function

| Validator                 | Description                         |
|---------------------------|-------------------------------------|
| **isAddress(str)**        | check if a string is a address.     |
| **isBoolean(str)**        | check if a string is a boolean.     |
| **isInt8(str)**           | check if a string is a int8.        |
| **isUint8(str)**          | check if a string is a uint8.       |
| **isValid(type, str)**    | check if a string is match the type |
| **getRange(type)**        | get type MIN and MAX range          |
| **getMessage(type, str)** | get valid message                   |

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

validator.isValid('uint', "123"); // true
validator.isValid('uint', "280"); // false
validator.isValid('address', "ooooooxxxxx"); // false

validator.getMessage('uint8', '255');
validator.getMessage('address', '0xa77451687Ee77cB3DFf16A24446C54DB76C80222');
validator.getMessage('int8', '129'); // The value is an illegal range.
validator.getMessage('uint8', '256'); // The value is an illegal range.
validator.getMessage('bool', '0'); // The value is not a boolean.
validator.getMessage('address', 'oooooxxxx'); // The value is not a valid address.
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

### License (MIT)

```
MIT License

Copyright (c) 2018 Ai-Lin Liou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[npm-url]: https://npmjs.org/package/solidity-validator
[npm-image]: http://img.shields.io/npm/v/solidity-validator.svg