const bel = require('bel')
const csjs = require('csjs-inject')
const validator = require('solidity-validator')

module.exports = displayByteInput

function displayByteInput ({ theme: { classes: css }, type,  cb }) {
  return input = bel`<div class=${css.byteField}> <input class=${css.inputField} data-type=${type} onclick="${(e)=>e.target.select()}" oninput=${validate} placeholder='0x...'> </div>`
  function validate (e) {
    let value = e.target.value
    cb(validator.getMessage(type, value), e.target, value)
  }
}
