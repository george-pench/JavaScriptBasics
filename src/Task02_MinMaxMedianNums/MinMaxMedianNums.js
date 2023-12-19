'use strict'

function getMinMaxMedianNumbers (arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, median: 0 }
  }

  const max = Math.max(...arr)
  const min = Math.min(...arr)

  const sortedArr = arr.slice().sort((a, b) => a - b)

  const midArr = Math.floor(sortedArr.length / 2)
  let median = 0

  if (sortedArr.length % 2 === 0) {
    median = (sortedArr[midArr - 1] + sortedArr[midArr]) / 2
  } else {
    median = sortedArr[midArr]
  }

  return { min, max, median }
}

export default getMinMaxMedianNumbers
