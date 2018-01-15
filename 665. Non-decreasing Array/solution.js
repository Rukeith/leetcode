/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 665. Non-decreasing Array
 * Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 * 
 * Example 1:
 * Input: [4,2,3]
 * Output: True
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 * 
 * Example 2:
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one element.
 * Note: The n belongs to [1, 10,000].
 * 
 * URL:
 * https://leetcode.com/problems/non-decreasing-array/description/
 */
var checkPossibility = function(nums) {
  const length = nums.length - 1;
  let canChange = true;
  for (let i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (canChange) {
        if (i > 0 && nums[i + 1] > nums[i - 1] || i === 0) {
          nums[i] = nums[i + 1];
        } else nums[i + 1] = nums[i];
        canChange = false;
      }
      else return false;
    }
  }
  return true;
};