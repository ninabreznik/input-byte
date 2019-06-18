const chai = require('chai')
chai.should()

const assertString = require('../src/lib/util/assertString')

describe('assertString', () => {
  it('Expected string but received a number.', async () => {
    try {
      assertString(2)
    } catch (error) {
      error.should.be.a('error')
      error.message.should.be.eq('Expected string but received a number.')
    }
  })

  it('Expected string but received null.', async () => {
    try {
      assertString(null)
    } catch (error) {
      error.should.be.a('error')
      error.message.should.be.eq('Expected string but received null.')
    }
  })

  it('Expected string but received BigNumber.', async () => {
    try {
      const bigNumber = require('bignumber.js')
      assertString(bigNumber(2))
    } catch (error) {
      error.should.be.a('error')
      error.message.should.be.eq('Expected string but received BigNumber.')
    }
  })
})
