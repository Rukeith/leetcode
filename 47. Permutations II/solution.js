/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  function helper(prefix) {
    if (prefix.length === nums.length) {
      res.push(prefix.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

      visited[i] = true;
      prefix.push(nums[i]);
      helper(prefix);
      prefix.pop();
      visited[i] = false;
    }
  }

  const visited = [];
  const res = [];
  nums.sort((a, b) => a - b);
  helper([]);
  return res;
};