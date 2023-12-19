"use strict";

const StringCalculator = {
  parseNumber: function (str) {
    return str.indexOf(".") >= 0 ? parseFloat(str) : parseInt(str, 10);
  },

  add: function (x, y) {
    const firstOperand = this.parseNumber(x);
    const secondOperand = this.parseNumber(y);
    return firstOperand + secondOperand;
  },

  subtract: function (x, y) {
    const firstOperand = this.parseNumber(x);
    const secondOperand = this.parseNumber(y);
    return firstOperand - secondOperand;
  },

  multiply: function (x, y) {
    const firstOperand = this.parseNumber(x);
    const secondOperand = this.parseNumber(y);
    return firstOperand * secondOperand;
  },

  divide: function (x, y) {
    const firstOperand = this.parseNumber(x);
    const secondOperand = this.parseNumber(y);
    return secondOperand !== 0
      ? firstOperand / secondOperand
      : "Error: Cannot divide by zero!";
  },
};

module.exports = StringCalculator;
