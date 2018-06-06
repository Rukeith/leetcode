/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  let longest = '';
  const wordSet = new Set(words);

  for (let word of words) {
    if (word.length > longest.length || (word.length === longest.length && word < longest)) {
      let goodWord = true;
      for (let i = 1; i < word.length; i++) {
        if (!wordSet.has(word.slice(0, i))) {
          goodWord = false;
          break;
        }
      }
      if (goodWord) longest = word;
    }
  }
  return longest;
};