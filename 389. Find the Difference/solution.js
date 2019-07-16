/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const n = s + t;
  let res = 0;
  for (let i = 0; i < n.length; i++) {
    res = res ^ n[i].charCodeAt();
  }
  return String.fromCharCode(res);
};
