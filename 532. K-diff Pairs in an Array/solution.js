/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (!nums || nums.length === 0 || k < 0) return 0;
  const set = new Set(),
    res = new Set();
  nums.forEach(x => {
    if (set.has(x + k)) res.add(x + k);
    if (set.has(x - k)) res.add(x);
    set.add(x);
  });
  return res.size;
};
