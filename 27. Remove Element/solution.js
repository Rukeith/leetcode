/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const length = nums.length - 1;
  for (let i = length; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }  
};