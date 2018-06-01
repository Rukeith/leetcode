/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  const count = Math.ceil(B.length / A.length);
  const str = A.repeat(count);
  return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};