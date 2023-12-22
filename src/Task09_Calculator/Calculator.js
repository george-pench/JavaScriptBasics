'use strict'

const Calculator = {
  calculate: function (firstOperand, operator, secondOperand) {
    const cacheKey = `${firstOperand}_${operator}_${secondOperand}`
    const cacheResult = localStorage.getItem(cacheKey)

    if (cacheResult !== null) {
      return cacheResult
    }

    let result

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand
        break
      case '-':
        result = firstOperand - secondOperand
        break
      case '*':
        result = firstOperand * secondOperand
        break
      case '/':
        result = secondOperand !== 0 ? firstOperand / secondOperand : 'Cannot divide by zero'
        break
      default:
        return 'Invalid operation'
    }

    localStorage.setItem(cacheKey, result.toString())
    return result
  }
}

export default Calculator
