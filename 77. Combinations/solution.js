/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const curr = [];
  const res = [];

  const _combine = (n, k, curr, res) => {
    if (curr.length === k) {
      res.push(curr.slice());
      return;
    }
    
    let i = (curr.length > 0) ? curr[curr.length - 1] + 1 : 1;
    for (; i <= n - (k - curr.length - 1); i++) {
      curr.push(i);
      _combine(n, k, curr, res);
      curr.pop();
    }
  };

  _combine(n, k, curr, res);
  return res;
};