'use strict'

// O(n^2) complexity
export default function getMaxSubSum (arr) {
  let maxSum = 0
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j]
      maxSum = Math.max(maxSum, currentSum)
    }
  }

  return maxSum
}

// O(n) Linear complexity
export function getMaxSubSumLinear (arr) {
  let maxSum = 0
  let currentSum = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]
    maxSum = Math.max(maxSum, currentSum)
    if (currentSum < 0) {
      currentSum = 0
    }
  }

  return maxSum
}
