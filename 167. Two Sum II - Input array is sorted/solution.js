/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while(end > start) {
    const sum = numbers[start] + numbers[end];
    if (target === sum) break;
    else if (target > sum) start++;
    else end--;
  }
  return [++start, ++end];
};