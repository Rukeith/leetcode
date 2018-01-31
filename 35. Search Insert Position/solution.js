/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 35. Search Insert Position
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * Example 2:
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * Example 3:
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * Example 1:
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * URL:
 * https://leetcode.com/problems/search-insert-position/description/
 * 
 */
var searchInsert = function(nums, target) {
  let mid, index = 0, len = nums.length - 1;
  if (nums.indexOf(target) > -1) return nums.indexOf(target);
  else if (target >= nums[len]) return nums.length;
  else if (target <= nums[0]) return 0;
  else {
    while(index <= len) {
      mid = parseInt((len + index) / 2);
      if (target === nums[mid]) return mid;
      else if (target < nums[mid]) len = mid - 1;
      else index = mid + 1;
    }
  
    return index;
  }
};