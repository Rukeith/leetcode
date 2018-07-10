/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  function helper(res, nums, i, n) {
    if (i === n) {
      res.push(nums.slice());
      return;
    }
  
    for (let j = i; j <= n; j++) {
      swap(nums, i, j);
      helper(res, nums, i + 1, n);
      swap(nums, i, j);
    }
  }

  if (!nums || nums.length === 0) return [];
  const res = [];
  helper(res, nums, 0, nums.length - 1);
  return res;
};