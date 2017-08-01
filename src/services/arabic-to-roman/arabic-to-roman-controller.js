
const arabicToRoman = require('./arabic-to-roman')

class ArabicToRomanController {
  constructor (options) {
    this.options = options || {};
  }

  get (arabicNumber) {
    return Promise.resolve(arabicToRoman(arabicNumber))
  }
}

module.exports = (options) => new ArabicToRomanController(options);
