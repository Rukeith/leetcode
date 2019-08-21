/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) return N;

  let first = 0;
  let second = 1;
  let result = 0;
  for (let i = 2; i <= N; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};
