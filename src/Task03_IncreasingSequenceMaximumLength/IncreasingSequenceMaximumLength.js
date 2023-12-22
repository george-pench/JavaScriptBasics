'use strict'

function findMaxIncreasingSequence (arr) {
  let maxSequence = []
  let currentSequence = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSequence[currentSequence.length - 1]) {
      currentSequence.push(arr[i])
    } else {
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence
      }
      currentSequence = [arr[i]]
    }
  }

  if (currentSequence.length > maxSequence.length) {
    maxSequence = currentSequence
  }

  return maxSequence
}

export default findMaxIncreasingSequence
