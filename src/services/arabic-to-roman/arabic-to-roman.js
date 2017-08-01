const romanEnum = require('./roman-enum')


module.exports = arabicToRoman;

function arabicToRoman(arabicNumber) {
  switch (true) {
    case arabicNumber === 0 : {
      return ''
    }
    case arabicNumber >= 90 : {
      return romanEnum.ninety + arabicToRoman(arabicNumber - 90)
    }
    case arabicNumber >= 50 : {
      return romanEnum.fifty + arabicToRoman(arabicNumber - 50)
    }
    case arabicNumber >= 40 : {
      return romanEnum.forty + arabicToRoman(arabicNumber - 40)
    }
    case arabicNumber >= 10 : {
      return romanEnum.ten + arabicToRoman(arabicNumber - 10)
    }
    case arabicNumber >= 9 : {
      return romanEnum.nine + arabicToRoman(arabicNumber - 9)
    }
    case arabicNumber >= 5 : {
      return romanEnum.five + arabicToRoman(arabicNumber - 5)
    }
    case arabicNumber >= 4 : {
      return romanEnum.four + arabicToRoman(arabicNumber - 4)
    }
    case arabicNumber >= 1 : {
      return romanEnum.one + arabicToRoman(arabicNumber - 1)
    }
  }
}
