/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (s === null || s.length === 0) {
    return s;
  }

  let tmp;
  let low = 0;
  let high = s.length - 1;
  const chars = s.split('');
  const vowels = 'aeiouAEIOU';
  
  while (high > low) {
    while(high > low && vowels.indexOf(chars[low]) === -1) {
      low++;
    }

    while(high > low && vowels.indexOf(chars[high]) === -1) {
      high--;
    }

    tmp = chars[high];
    chars[high] = chars[low];
    chars[low] = tmp;
    low++;
    high--;
  }

  return chars.join('');
};