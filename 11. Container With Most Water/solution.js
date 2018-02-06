/**
 * 11. Container With Most Water
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n
 * vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
 * which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container.
 * 
 * @param {number[]} height
 * @return {number}
 *
 * URL:
 * https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function(height) {
  if (height === null || height.length < 2) {
    return 0;
  }

  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};
