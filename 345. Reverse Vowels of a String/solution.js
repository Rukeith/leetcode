/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowel = "aeiouAEIOU";
  const array = s.split("");

  for (let i = 0, j = array.length - 1; i < j; ) {
    if (vowel.indexOf(array[i]) > -1) {
      if (vowel.indexOf(array[j]) > -1) {
        const tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
        i++;
      }
      j--;
    } else {
      i++;
    }
  }

  return array.join("");
};
