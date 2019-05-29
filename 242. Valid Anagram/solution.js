/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let alphabets = {};
  s.split("").forEach(
    char => (alphabets[char] = alphabets[char] ? alphabets[char] + 1 : 1)
  );
  t.split("").forEach(
    char => (alphabets[char] = alphabets[char] ? alphabets[char] - 1 : -1)
  );
  return Object.keys(alphabets).every(char => alphabets[char] === 0);
};
