/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ans = [];

  function helper(arr, remaining, pos) {
    if (remaining < 0) return;
    else if (remaining === 0) {
      ans.push(arr.slice(0));
      return;
    }

    for (let i = pos; i < candidates.length; i++) {
      const val = candidates[i];
      if (i > pos && val === candidates[i - 1]) continue;
      if (remaining - val >= 0) {
        arr.push(val);
        helper(arr, remaining - val, i + 1);
        arr.pop(val);
      } else {
        return;
      }
    }
  }

  candidates.sort((a, b) => a - b);
  helper([], target, 0);
  return ans;
};