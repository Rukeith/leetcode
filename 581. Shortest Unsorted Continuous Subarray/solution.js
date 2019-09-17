/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let end = 0;
  let max = -Infinity;
  let min = Infinity;
  let start = 0;

  nums.forEach((ele, i) => {
    max = Math.max(ele, max);
    if (ele < max) {
      min = Math.min(min, ele);
      end = i;
    }
  });

  if (end === 0) return end;
  for (let i = 0; i < nums.length; i++) {
    if (min < nums[i]) {
      start = i;
      break;
    }
  }

  return end - start + 1;
};
