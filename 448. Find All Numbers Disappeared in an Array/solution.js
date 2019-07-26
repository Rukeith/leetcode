/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const t = Math.abs(nums[i]) - 1;
    if (nums[t] > 0) nums[t] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
};
