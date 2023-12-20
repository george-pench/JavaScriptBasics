import textFormatter from './TextFormatter.js'

describe('textFormatter Tests', () => {
  test('Word wrap with limited size and lines', () => {
    const text = 'This is a test text to demonstrate different wrapping styles. It contains several sentences. And many words.'
    const result = textFormatter(text, 100, 10, 'word wrap')
    expect(result).toBe(
      'This is a\ntest text\nto\ndemonstrate\ndifferent\nwrapping\nstyles. It\ncontains\nseveral\nsentences.\nAnd man'
    )
  })

  test('Character wrap with limited size and lines', () => {
    const text = 'This is another example, designed to test character wrapping. It has a different structure and length.'
    const result = textFormatter(text, 80, 15, 'character wrap')
    expect(result).toBe(
      'This is another\n example, desig\nned to test cha\nracter wrapping\n. It has a diff\nerent'
    )
  })

  test('Sentence wrap with limited size', () => {
    const text = 'Sentence wrapping is different. It should keep sentences intact. This text has several sentences to demonstrate the effect. Last sentence.'
    const result = textFormatter(text, 150, 1, 'sentence wrap')
    expect(result).toBe(
      'Sentence wrapping is different.\n It should keep sentences intact.\n This text has several sentences to demonstrate the effect.\n Last sentence.'
    )
  })

  test('No Wrap with limited lines', () => {
    const text = 'No wrapping means the text remains as is, but lines can still be limited. This is useful for extracts.'
    const result = textFormatter(text, 1000, 3, 'no wrap')
    expect(result).toBe(
      'No wrapping means the text remains as is, but lines can still be limited. This is useful for extracts.'
    )
  })
})
