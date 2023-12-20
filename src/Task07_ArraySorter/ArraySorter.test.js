import ArraySorter from './ArraySorter.js'

describe('ArraySorter object tests', () => {
  test('selection sort', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(ArraySorter.selection([...unsortedArray])).toEqual(sortedArray)
  })

  test('selection sort with an empty array', () => {
    expect(ArraySorter.selection([])).toEqual([])
  })

  test('bubble sort', () => {
    const unsortedArray = [5, 3, 8, 4, 2]
    const sortedArray = [2, 3, 4, 5, 8]
    expect(ArraySorter.bubbleSort([...unsortedArray])).toEqual(sortedArray)
  })

  test('bubble sort with negative numbers', () => {
    const unsortedArray = [-3, 1, -5, 4, 0]
    const sortedArray = [-5, -3, 0, 1, 4]
    expect(ArraySorter.bubbleSort([...unsortedArray])).toEqual(sortedArray)
  })

  test('bubble sort with an empty array', () => {
    expect(ArraySorter.bubbleSort([])).toEqual([])
  })

  test('gnome sort', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(ArraySorter.gnomeSort([...unsortedArray])).toEqual(sortedArray)
  })
})
