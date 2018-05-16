/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  if (nums.length < 2) return 0;

  let count = new Map();
  let longest = 0;

  for (let num of nums) {
    count.set(num, count.get(num) ? count.get(num) + 1 : 1);

    if (count.has(num + 1)) {
      longest = Math.max(longest, count.get(num + 1) + count.get(num));
    }

    if (count.has(num - 1)) {
      longest = Math.max(longest, count.get(num - 1) + count.get(num));
    }
  }

  return longest;
};