/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  if (s.length < 1) return null;

  let result = romanNumerals[s[s.length - 1]];
  for (let i = 0; i < s.length - 1; i++) {
    if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
      result -= romanNumerals[s[i]];
    } else {
      result += romanNumerals[s[i]];
    }
  }

  return result;
};
