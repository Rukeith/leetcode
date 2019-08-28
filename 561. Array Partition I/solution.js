/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
};
