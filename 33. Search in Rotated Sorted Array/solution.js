/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  if (!len) return -1;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target < nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};