/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length < 2) return false;
  const map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
};