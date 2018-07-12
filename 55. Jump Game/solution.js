/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;
    reach = Math.max(i + nums[i], reach);
  }

  return true;
};