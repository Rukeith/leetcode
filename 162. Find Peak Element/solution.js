/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  return nums.indexOf(Math.max(...nums));
};