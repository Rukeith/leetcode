/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let output = '';
  let suffix = 'maa';
  let moved = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] === ' ') {
      output += ' ';
      suffix += 'a';
      moved = '';
    } else if (i + 1 === S.length || S[i + 1] === ' ') {
      output += S[i] + moved + suffix;
    } else if ((i === 0 || S[i - 1] === ' ') && vowels.indexOf(S[i]) === -1) {
      moved = S[i];
    } else {
      output += S[i];
    }
  }
  return output;
};