/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const strArr = nums.map(value => value.toString());
  strArr.sort((a, b) => parseInt(a + b) > parseInt(b + a) ? -1 : 1);
  const ans = strArr.reduce((sum, value) => sum + value);

  let pos = 0;
  while (ans[pos] === '0' && pos + 1 < ans.length) {
    pos++;
  }

  return ans.substring(pos);
};