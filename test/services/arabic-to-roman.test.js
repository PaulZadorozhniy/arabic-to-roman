const chai = require('chai')
const expect = chai.expect

const arabicToRoman = require('../../src/services/arabic-to-roman/arabic-to-roman-controller')()

describe('\'arabic-to-roman\' service', () => {
  it('zero returns empty string', () => {

    arabicToRoman.get(0).then((result) => {
      expect(result).to.equal('')
    })
  })

  it('1 returns I', () => {
    arabicToRoman.get(1).then((result) => {
      expect(result).to.equal('I')
    })
  })

  it('5 returns V', () => {
    arabicToRoman.get(5).then((result) => {
      expect(result).to.equal('V')
    })
  })

  it('10 returns X', () => {
    arabicToRoman.get(10).then((result) => {
      expect(result).to.equal('X')
    })
  })

  it('2 returns II', () => {
    arabicToRoman.get(2).then((result) => {
      expect(result).to.equal('II')
    })
  })

  it('3 returns III', () => {
    arabicToRoman.get(3).then((result) => {
      expect(result).to.equal('III')
    })
  })

  it('20 returns XX', () => {
    arabicToRoman.get(20).then((result) => {
      expect(result).to.equal('XX')
    })
  })

  it('50 returns L', () => {
    arabicToRoman.get(50).then((result) => {
      expect(result).to.equal('L')
    })
  })

  it('4 returns IV', () => {
    arabicToRoman.get(4).then((result) => {
      expect(result).to.equal('IV')
    })
  })
})
