/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const arr  = Array(n).fill().map((_, i) => i + 1);
  const fact = [1, 1];
  let str  = '';

  for (let i = 2; i < n; i++) {
    fact.push((i) * fact[i - 1]);
  }

  let cur = k;
  for (let i = 0; i < n; i++) {
    const div = Math.floor((cur - 1) / fact[n - 1 - i]);
    cur = ((cur - 1) % fact[n - 1 - i]) + 1;
    str += arr[div];
    arr.splice(div, 1);
  }

  return str;
};