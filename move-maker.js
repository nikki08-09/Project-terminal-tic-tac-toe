/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function validateMove(move, board) {
  let moveArr = move.split(",");
  if (moveArr.length !== 2) {
    console.log("Try again... Length of move should be 2");
    return false;
  }
  let row = parseInt(moveArr[0]);
  let col = parseInt(moveArr[1]);
  if (isNaN(row) || isNaN(col)) {
    console.log("Try again... Move should be numbers");
    return false;
  }
  if (row < 1 || row > 3 || col < 1 || col > 3) {
    console.log("Try again... Move should be between 1 and 3");
    return false;
  }
  if (board[row - 1][col - 1] !== "_") {
    console.log("Try again... Space is already occupied");
    return false;
  }
  return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
  let moveArr = move.split(",");
  if (!validateMove(move, board)) {
    return false;
  }
  if (player === 1) {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        if (i === parseInt(moveArr[0]) && j === parseInt(moveArr[1])) {
          let a = i - 1;
          let b = j - 1;
          console.log("Player 1 move");
          board[a][b] = "X";
          return board;
        }
      }
    }
  } else if (player === 2) {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        if (i === parseInt(moveArr[0]) && j === parseInt(moveArr[1])) {
          let a = i - 1;
          let b = j - 1;
          console.log("Player 2 move");
          board[a][b] = "O";
          return board;
        }
      }
    }
  }
}
