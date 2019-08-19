/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  return words.filter(
    word =>
      /^[qwertyuiop]*$/i.test(word) ||
      /^[asdfghjkl]*$/i.test(word) ||
      /^[zxcvbnm]*$/i.test(word)
  );
};
