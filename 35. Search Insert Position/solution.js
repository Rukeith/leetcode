/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = 0;
  let len = nums.length - 1;
  if (nums.indexOf(target) > -1) return nums.indexOf(target);
  if (target >= nums[len]) return nums.length;
  if (target <= nums[0]) return 0;

  while (index <= len) {
    const mid = parseInt((len + index) / 2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) len = mid - 1;
    else index = mid + 1;
  }

  return index;
};
