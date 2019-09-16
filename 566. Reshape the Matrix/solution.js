/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums;
  const flat = nums.reduce((acc, n) => acc.concat(n), []);
  return [...Array(r).keys()].map(i => flat.slice(i * c, (i + 1) * c));
};
