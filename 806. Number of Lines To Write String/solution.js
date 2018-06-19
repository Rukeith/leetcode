/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let rowIndex = 1;
  let currentRowWidth = 0;
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  if (S.trim() === '') return [0, 0];
  
  for (let i = 0; i < S.length; i++) {
    const letterIndex = letters.indexOf(S[i]);
    const letterWidth = widths[letterIndex];
      
    if ((currentRowWidth + letterWidth) > 100) {
      currentRowWidth = 0;
      rowIndex++;
    }
    currentRowWidth += letterWidth;
  }
  return [rowIndex, currentRowWidth];
};