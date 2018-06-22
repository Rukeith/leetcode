/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};
