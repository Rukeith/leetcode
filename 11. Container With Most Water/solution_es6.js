/**
 * 11. Container With Most Water
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n
 * vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
 * which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container.
 *
 * URL:
 * https://leetcode.com/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let answer = 0, i = 0, j = height.length - 1;

  while (i < j) {
    answer = Math.max(answer, Math.min(height[i], height[j]) * (j - i));

    if (height[i] < height[j])
      i++;
    else
      j--;
  }

 return answer;
};
