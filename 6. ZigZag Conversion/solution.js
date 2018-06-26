/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let res = '';
  if (numRows === 1) return s;
  for (let i = 0; i < numRows; i++) {
    let k = i;
    for (let j = numRows - 1; k < s.length; j += numRows - 1) {
      res += s.charAt(k);
      if (k % (numRows - 1) === 0) {
        k += 2 * (numRows - 2) + 2;
      } else {
        k += (j - k - 1) * 2 + 2;
      }
    }
  }

  return res;
};