/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  return (B + B).indexOf(A) !== -1 && A.length === B.length;
};