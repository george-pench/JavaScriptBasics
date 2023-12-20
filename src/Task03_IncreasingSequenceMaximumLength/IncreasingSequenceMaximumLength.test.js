import findMaxIncreasingSequence from './IncreasingSequenceMaximumLength.js'

describe('Finds an increasing sequence of maximum length in an array', () => {
  test('finds the longest increasing sequence', () => {
    const input = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]
    const output = [1, 2, 5, 7, 8, 90]
    expect(findMaxIncreasingSequence(input)).toEqual(output)
  })

  test('all elements increasing', () => {
    const input = [1, 2, 3, 4, 5, 6]
    const output = [1, 2, 3, 4, 5, 6]
    expect(findMaxIncreasingSequence(input)).toEqual(output)
  })

  test('multiple equal length sequences', () => {
    const input = [1, 2, 3, 1, 2, 3]
    const output = [1, 2, 3]
    expect(findMaxIncreasingSequence(input)).toEqual(output)
  })

  test('an array with a single element', () => {
    const input = [1]
    const output = [1]
    expect(findMaxIncreasingSequence(input)).toEqual(output)
  })

  test('an empty array', () => {
    const input = []
    const output = []
    expect(findMaxIncreasingSequence(input)).toEqual(output)
  })
})
