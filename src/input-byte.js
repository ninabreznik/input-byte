const bel = require('bel')
const csjs = require('csjs-inject')
const validator = require('solidity-validator')

module.exports = displayByteInput

function displayByteInput ({ theme: { classes: css }, cb }) {
  return input = bel`<div class=${css.byteField}> <input class=${css.inputField} data-type="byte" oninput=${validate} placeholder='xyz'> </div>`
  function validate (e) {
    let value = e.target.value
    cb(validator.getMessage('byte', value), value)
  }
}
