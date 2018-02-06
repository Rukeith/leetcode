/**
 * 13. Roman to Integer
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * @param {string} s
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/roman-to-integer/description/
 */
var romanToInt = function(s) {
  const hash = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  let sum = 0;
  let lastValue = null;
  for(let n = s.length - 1; n > -1; n--) {
    const char = s.charAt(n);
    const charVal = hash[char];
    
    if (lastValue && lastValue > charVal) {
      sum -= charVal;
    } else {
      sum += charVal;
      lastValue = charVal;
    }
  }

  return sum;
};