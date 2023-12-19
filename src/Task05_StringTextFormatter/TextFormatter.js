'use strict'

function textFormatter (text, maxSize, maxLines, formatType = 'no wrap') {
  if (text.length > maxSize) {
    text = text.substring(0, maxSize)
  }

  switch (formatType) {
    case 'word wrap':
      return wordWrap(text, maxLines)
    case 'character wrap':
      return characterWrap(text, maxLines)
    case 'sentence wrap':
      return sentenceWrap(text, maxLines)
    case 'no wrap':
    default:
      return noWrap(text, maxLines)
  }
}

function wordWrap (text, maxLines) {
  const lines = []
  const words = text.split(' ')
  let currentLine = words[0]

  for (let i = 1; i < words.length; i++) {
    const length = currentLine.length + words[i].length

    if (length + 1 <= maxLines) {
      currentLine += ' ' + words[i]
    } else {
      lines.push(currentLine)
      currentLine = words[i]
    }
  }

  lines.push(currentLine)
  return lines.join('\n')
}

function characterWrap (text, maxLines) {
  const lines = []

  for (let i = 0; i < text.length; i += maxLines) {
    lines.push(text.substring(i, Math.min(i + maxLines, text.length)))
  }
  return lines.join('\n')
}

function sentenceWrap (text, maxLines) {
  const lines = []
  const sentences = text.match(/[^.!?]+[.!?]+/g) || []
  let currentLine = sentences[0] || ''

  for (let i = 1; i < sentences.length; i++) {
    if (currentLine.length + sentences[i].length + 1 <= maxLines) {
      currentLine += ' ' + sentences[i]
    } else {
      lines.push(currentLine)
      currentLine = sentences[i]
    }
  }

  lines.push(currentLine)
  return lines.join('\n')
}

function noWrap (text, maxLines) {
  return text.split('\n').slice(0, maxLines).join('\n')
}

export default textFormatter
