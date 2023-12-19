'use strict'

const BinaryConverter = {
  binaryToDecimal: function (arr) {
    let decimalNumber = 0
    for (let i = 0; i < arr.length; i++) {
      decimalNumber += arr[i] * Math.pow(2, arr.length - 1 - i)
    }
    return decimalNumber
  },

  decimalToBinary: function (decimalNumber) {
    const arr = []
    while (decimalNumber > 0) {
      arr.unshift(decimalNumber % 2)
      decimalNumber = Math.floor(decimalNumber / 2)
    }
    return arr.length > 0 ? arr : [0]
  },

  hexToOther: function (hexString, base) {
    const decimalNumber = parseInt(hexString, 16)
    return base === 2 ? this.decimalToBinary(decimalNumber) : decimalNumber
  },

  otherToHex: function (number, base) {
    const decimalNumber = base === 2 ? this.binaryToDecimal(number) : number
    return decimalNumber.toString(16).toUpperCase()
  }
}

export default BinaryConverter
