/**
 * 26. Remove Duplicates from Sorted Array
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example:
 * Given nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * And the origin nums should resort elements like [1,2,1]. It doesn't matter what you leave beyond the new length.
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums;
  let i = 0;  // Store the last number position
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] != nums[i]) {
      i++;
      nums[i] = nums[index];
    }
  }
  return i + 1;
};