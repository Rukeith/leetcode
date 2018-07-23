/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 0 || s[0] === '0') return 0;

  let c1 = 1, c2 = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0') {
      c2 = 0;
      if (c1 === 0) return 0;
    }

    if (s[i - 1] === '1' || s[i - 1] === '2' && parseInt(s[i]) <= 6) {
      let temp = c2
      c2 = c1 + c2;
      c1 = temp;
    } else {
      c1 = c2;
    }
  }

  return c2;
};