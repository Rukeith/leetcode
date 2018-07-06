/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  function helper(result, temp, candidates, remain, start) {
    if (remain < 0) return;
    else if(remain === 0) result.push(temp.slice());
    else {
      for (let i = start; i < candidates.length; i++) {
        temp.push(candidates[i]);
        helper(result, temp, candidates, remain - candidates[i], i);
        temp.pop();
      }
    }
  }

  const result = [];
  helper(result, [], candidates, target, 0);
  return result;
};