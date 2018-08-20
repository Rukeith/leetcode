/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let t = 0;
  let a = m^n;

  while (a > 0) {
    a >>= 1;
    m >>= 1;
    t++;
  }
  m <<= t;
  return m;
};