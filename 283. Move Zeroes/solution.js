/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slowI = nums.indexOf(0),
    fastI = slowI + 1;
  if (slowI == -1) return;

  while (fastI < nums.length) {
    if (nums[slowI] == 0 && nums[fastI] != 0) {
      const temp = nums[slowI];
      nums[slowI] = nums[fastI];
      nums[fastI] = temp;
      slowI++;
      fastI++;
    } else {
      fastI++;
    }
  }
};
