/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let sum = 0;
  this.dp = nums.map(num => (sum += num));
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.dp[j];
  return this.dp[j] - this.dp[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
