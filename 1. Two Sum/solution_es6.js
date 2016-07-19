/**
 * 1. Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].

 * URL:
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let numLength = nums.length, number = [];
  let i = 0, j = 0;
  for (; i < numLength; i++) {
      for (; j < numLength; j++) {
          if (target === (nums[i] + nums[j]) && i !== j) {
              number = [i, j];
              break;
          }
      }
      if (number.length !== 0)
        break;
  }
  
  return number;
};

// console.log(twoSum([2, 7, 11, 15], 9));