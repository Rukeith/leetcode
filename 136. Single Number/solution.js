/**
 * 136. Single Number
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/single-number/description/
 */
var singleNumber = function(nums) {
  let a = 0;
  nums.forEach(i => a ^= i);
  return a;
};