/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 1. Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * URL:
 * https://leetcode.com/problems/two-sum/
 */
var twoSum = function(nums, target) {
  const index = {}
  for (let i = 0; i < nums.length; i++) {
    const matchNum = target - nums[i];
    if (typeof index[matchNum] === 'number') return [index[matchNum], i]
    index[nums[i]] = i;
  }
};
