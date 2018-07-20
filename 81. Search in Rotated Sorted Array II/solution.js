/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length === 0) return false;

  function searchSub(lp, rp) {
    const mid = Math.floor((lp + rp) / 2);
    if (nums[lp] === target || nums[rp] === target) return true;
    if (lp === mid) return false;
    return searchSub(lp, mid) || searchSub(mid, rp);
  }

  return searchSub(0, nums.length - 1);
};