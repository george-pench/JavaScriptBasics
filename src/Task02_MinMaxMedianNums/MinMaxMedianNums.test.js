import minMaxMedianNumbers from './MinMaxMedianNums.js'

describe('MinMaxMedianNums function', () => {
  test('handles mixed positive and negative numbers', () => {
    expect(minMaxMedianNumbers([1, -2, 3, 4, -5])).toEqual({
      min: -5,
      max: 4,
      median: 1
    })
  })

  test('handles positive numbers only', () => {
    expect(minMaxMedianNumbers([2, 5, 1, 8, 3])).toEqual({
      min: 1,
      max: 8,
      median: 3
    })
  })

  test('handles negative numbers only', () => {
    expect(minMaxMedianNumbers([-3, -1, -4, -2, -5])).toEqual({
      min: -5,
      max: -1,
      median: -3
    })
  })

  test('handles an array having one element', () => {
    expect(minMaxMedianNumbers([5])).toEqual({ min: 5, max: 5, median: 5 })
  })

  test('handles an empty array', () => {
    expect(minMaxMedianNumbers([])).toEqual({ min: 0, max: 0, median: 0 })
  })
})
