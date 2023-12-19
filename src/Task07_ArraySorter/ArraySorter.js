"use strict";

const nums = [7, 3, 6, 2, 4, 1, 5];

function selection(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    // swap values
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }

  return nums;
}

console.log(selection(nums));
