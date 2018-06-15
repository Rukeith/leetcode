/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  const mapper = char => codes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  return new Set(words.map(word => word.split('').map(mapper).join(''))).size;
};