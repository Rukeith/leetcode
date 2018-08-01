/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return;

  const solveHelper = (board, i, j) => {
    if (board[i][j] === 'O') board[i][j] = "#";
    else return;

    if (i - 1 > 0 && i - 1 < board.length) solveHelper(board, i - 1, j);
    if (i + 1 > 0 && i + 1 < board.length) solveHelper(board, i + 1, j);
    if (j - 1 > 0 && j - 1 < board[0].length) solveHelper(board, i, j - 1);
    if (j + 1 > 0 && j + 1 < board[0].length) solveHelper(board, i, j + 1);
    return;
  }

  for (let j = 0; j < board[0].length; j++) {
    solveHelper(board, 0, j);
    solveHelper(board, board.length - 1, j);
  }
  for (let i = 0; i < board.length; i++) {
    solveHelper(board, i, 0);
    solveHelper(board, i, board[0].length - 1);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};