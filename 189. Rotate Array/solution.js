/**
 * 189. Rotate Array
 * Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * 
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 * 
 * Hint:
 * Could you do it in-place with O(1) extra space?
 * 
 * Related problem: Reverse Words in a String II
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * URL:
 * https://leetcode.com/problems/rotate-array/description/
 */
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length  - (k % nums.length), (k % nums.length)));
};