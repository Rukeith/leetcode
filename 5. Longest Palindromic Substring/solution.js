/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let Maxlen = 0;
  let first;

  for (let i = 0; i < s.length; i++) {
    let start = i;

    while ((i < s.length - 1) && (s.charAt(i) === s.charAt(i + 1))) i++;

    let end = i;
    let len = end - start + 1;
    const offstart = start;
    const offend = end;
    for (let offset = 1; offset <= Math.min(offstart, s.length - offend - 1); offset++) {
      if (s[offstart - offset] === s[offend + offset]) {
        len += 2;
        start--;
        end++;
      } else {
        break;
      }
    }

    if (len > Maxlen) {
      Maxlen = len;
      first = start;
    }
  }

  return s.substring(first, first + Maxlen);
};