/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const n = word.length;
  let lower = 0;
  for (let l of word) if (l > "Z") lower++;
  return lower === n || lower === 0 || (word[0] < "a" && lower === n - 1);

  // Method two: use regex
  // const regex = /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/
  // return regex.test(word)
};
