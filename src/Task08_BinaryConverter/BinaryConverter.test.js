import binaryConverter from './BinaryConverter.js'

describe('BinaryConverter', () => {
  test('converts binary to decimal', () => {
    expect(binaryConverter.binaryToDecimal([1, 0, 1])).toBe(5)
  })

  test('converts decimal to binary', () => {
    expect(binaryConverter.decimalToBinary(5)).toEqual([1, 0, 1])
  })

  test('converts hexadecimal to binary', () => {
    expect(binaryConverter.hexToOther('A', 2)).toEqual([1, 0, 1, 0])
  })

  test('converts hexadecimal to decimal', () => {
    expect(binaryConverter.hexToOther('A', 10)).toBe(10)
  })

  test('converts binary to hexadecimal', () => {
    expect(binaryConverter.otherToHex([1, 0, 1, 0], 2)).toBe('A')
  })

  test('converts decimal to hexadecima', () => {
    expect(binaryConverter.otherToHex(10, 10)).toBe('A')
  })
})
