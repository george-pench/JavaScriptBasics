/**
 * @jest-environment jsdom
 */
import calculator from './Calculator.js'

function storageMock () {
  const storage = {}

  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length () {
      return Object.keys(storage).length
    },
    key: function (i) {
      const keys = Object.keys(storage)
      return keys[i] || null
    }
  }
}

window.localStorage = storageMock()

describe('arithmeticOperations tests with localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('add operation and caching', () => {
    const result = calculator.calculate(10, '+', 5)
    expect(result).toBe(15)
    expect(localStorage.getItem('10_+_5')).toBe('15')
  })

  test('subtract operation and caching', () => {
    const result = calculator.calculate(10, '-', 5)
    expect(result).toBe(5)
    expect(localStorage.getItem('10_-_5')).toBe('5')
  })

  test('multiply operation and caching', () => {
    const result = calculator.calculate(5, '*', 5)
    expect(result).toBe(25)
    expect(localStorage.getItem('5_*_5')).toBe('25')
  })

  test('divide operation and caching', () => {
    const result = calculator.calculate(100, '/', 10)
    expect(result).toBe(10)
    expect(localStorage.getItem('100_/_10')).toBe('10')
  })

  test('divide by zero operation and caching', () => {
    const result = calculator.calculate(10, '/', 0)
    expect(result).toBe('Cannot divide by zero')
    expect(localStorage.getItem('10_/_0')).toBe('Cannot divide by zero')
  })
})
