'use strict'

const ArraySorter = {
  selection (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
  },

  bubbleSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  },

  gnomeSort (arr) {
    let index = 0
    while (index < arr.length) {
      if (index === 0) {
        index++
      }
      if (arr[index] >= arr[index - 1]) {
        index++
      } else {
        let temp = 0
        temp = arr[index]
        arr[index] = arr[index - 1]
        arr[index - 1] = temp
        index--
      }
    }
    return arr
  }
}

export default ArraySorter
