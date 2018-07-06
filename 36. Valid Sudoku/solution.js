/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        for (let k = 0; k < 9; k++) {
          if (k !== i && board[i][j] === board[k][j]) {
            return false;
          }
          if (k !== j && board[i][j] === board[i][k]) {
            return false;
          }
        }

        const a = (3 * Math.floor(i / 3));
        const b = (3 * Math.floor(j / 3));

        for (let l = a; l < (a + 3); l++) {
          for (let m = b; m < (b + 3); m++) {
            if (l !== i && m !== j && board[i][j] === board[l][m]) {
              return false;
            }
          }
        }
      }
    }
  }

  return true;
};