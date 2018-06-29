/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || digits.length === 0) return [];

  const result = [''];
  const mapping = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];

  for (let digit of digits) {
    const size = result.length;

    for (let i = 0; i < size; i++) {
      const oldStr = result.shift();
      const letters = mapping[parseInt(digit)];

      for (let letter of letters) result.push(`${oldStr}${letter}`);
    }
  }

  if (result[0] === '') result.pop();
  return result;
};