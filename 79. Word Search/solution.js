/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const wordLength = word.length;
  const words = word.split('');

  const verify = (row, col, path) => {
    if (
      row < 0
      || col < 0
      || row >= board.length
      || col >= board[0].length
      || board[row][col] !== words[path]
      || path > wordLength
    ) return false;

    path++;
    board[row][col] = '#';

    if (path === wordLength) return true;
    if (verify(row - 1, col, path)) return true;
    if (verify(row, col + 1, path)) return true;
    if (verify(row + 1, col, path)) return true;
    if (verify(row, col - 1, path)) return true;

    board[row][col] = words[--path];
    return false;
  }

  for(let r = 0; r < board.length; r++) {
    for(let c = 0; c < board[0].length; c++) {
      if(verify(r, c, 0)) return true;
    }
  }

  return false;
};