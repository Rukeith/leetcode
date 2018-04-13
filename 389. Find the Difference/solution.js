/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let a = 0;
  s = s + t;
  
  for (let i = 0; i < s.length; i++) {
    a ^= s.charCodeAt(i)
  }
  return String.fromCharCode(a);
};