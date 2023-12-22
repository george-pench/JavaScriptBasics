import calculator from './Task09_Calculator/Calculator.js'

document.getElementById('calculateBtn').addEventListener('click', function () {
  const firstOperand = parseFloat(document.getElementById('num1').value)
  const secondOperand = parseFloat(document.getElementById('num2').value)
  const operator = document.getElementById('operation').value

  const result = calculator.calculate(firstOperand, operator, secondOperand)
  document.getElementById('result').textContent = result
})
