/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  for (let i = 2; i < n; i++) {
    nums[i] += Math.max(nums[i - 2], (nums[i - 3] || 0));
  }
  return n ? Math.max(nums[n - 1], (nums[n - 2] || 0)) : 0;
};

// var rob = function(nums) {
//   const max = nums.length;
//   const dp = [];
//   for (let i = 0; i <= max; i++) {
//     if (i === 0) {
//       dp[i] = 0;
//     } else if (i === 1) {
//       dp[i] = nums[i - 1];
//     } else {
//       dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
//     }
//   }
//   return dp[max];
// };