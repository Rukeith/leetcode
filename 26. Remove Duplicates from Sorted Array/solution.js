/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums;
  let i = 0;  // Store the last number position
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] != nums[i]) {
      i++;
      nums[i] = nums[index];
    }
  }
  return i + 1;
};