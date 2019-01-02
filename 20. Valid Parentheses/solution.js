/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = {
    '(': ")",
    '{': '}',
    '[': "]"
  };
  const p = [];

  for (let k = 0; k < s.length; k++) {
    if (obj[s[k]]) {
      p.push(obj[s[k]]);
      continue;
    }

    if (s[k] !== p[p.length - 1]) {
      return false;
    }
    p.pop();
  }

  return (p.length === 0);
};