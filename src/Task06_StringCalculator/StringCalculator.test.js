const stringCalculator = require('./StringCalculator')

describe('StringCalculator', () => {
  test('adds two decimal numbers', () => {
    expect(stringCalculator.add('5.5', '4.5')).toBe(10)
  })

  test('adds two integer number', () => {
    expect(stringCalculator.add('5', '4')).toBe(9)
  })

  test('subtracts two numbers', () => {
    expect(stringCalculator.subtract('10', '5')).toBe(5)
  })

  test('subtracts two decimal numbers', () => {
    expect(stringCalculator.subtract('5.5', '6.5')).toBe(-1)
  })

  test('multiplies two numbers', () => {
    expect(stringCalculator.multiply('2', '3')).toBe(6)
  })

  test('multiplies two decimal numbers', () => {
    expect(stringCalculator.multiply('5.5', '10.5')).toBe(57.75)
  })

  test('divides two numbers', () => {
    expect(stringCalculator.divide('10', '2')).toBe(5)
  })

  test('divides by zero', () => {
    expect(stringCalculator.divide('10', '0')).toBe(
      'Error: Cannot divide by zero!'
    )
  })
})
