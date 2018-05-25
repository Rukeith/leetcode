/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let x, y;
  let sum = 0;
  let times = new Array(nums.length).fill(0);
  for (let n of nums) {
    sum += n;
    times[n - 1]++;
    if (times[n - 1] === 2) {
      x = n;
    }
  }
  y = (nums.length + 1) * nums.length / 2 + x - sum;
  return [x, y];
};