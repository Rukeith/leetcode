/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let point;
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      point = i - 1;
      break;
    }
  }

  if (point === undefined) {
    nums.sort((a, b) => a - b);
    return;
  }

  let tobeSwapped;
  const swap = nums[point];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > swap && !tobeSwapped) {
      tobeSwapped = i;
      break;
    }
  }

  const temp = nums[point];
  nums[point] = nums[tobeSwapped];
  nums[tobeSwapped] = temp;

  const sub = nums.slice(point + 1, nums.length).sort((a, b) => a - b);
  let i = nums.length - 1;
  while (i > point) {
    nums.pop();
    i--;
  }

  while (sub.length > 0) {
    nums.push(sub.shift());
  }

  return;
};