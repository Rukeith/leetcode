/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const xS = x.toString();
  if (xS.length === 1) return true;

  let i = xS.length - 1;
  let k = 0;
  while(i > k) {
    if (xS[i] !== xS[k]) return false;
    i--;
    k++;
  }

  return true;
};