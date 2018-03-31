/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zCnt = 0;
  for (let i = 0; i < nums.length - zCnt; i++) {
    if (nums[i] !== 0) continue;
    nums.splice(i, 1);
    nums.push(0);
    i--;
    zCnt++;
  }
};