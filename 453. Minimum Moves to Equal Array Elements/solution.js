/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  return nums.reduce((a, b) => a + b) - nums.length * Math.min(...nums);
};
