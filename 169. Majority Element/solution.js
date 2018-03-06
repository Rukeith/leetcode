/**
 * 169. Majority Element
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/majority-element/description/
 */
var majorityElement = function(nums) {
  const hash = {};
  const n = nums.length;
  const majority = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    hash[num] = (hash[num] || 0) + 1
    if (hash[num] > majority) return num;
  }
  return nums[0]
};