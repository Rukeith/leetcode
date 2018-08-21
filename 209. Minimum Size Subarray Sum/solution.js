/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let begin = 0, end = 0, sum = nums[0], min = Infinity;

  while (begin < nums.length && end < nums.length) {
    if (sum >= s) {
      if (min > end - begin + 1) {
        min = end - begin + 1;
      }
      sum -= nums[begin];
      begin++;
    } else {
      end++;
      sum += nums[end];
    }
  }

  return min === Infinity ? 0 : min;
};