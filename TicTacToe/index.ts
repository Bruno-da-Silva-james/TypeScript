const boards: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function displayBoard(board: number[][]): void {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function iaPlay(board: number[][]): void {
  let line: number = Math.floor(Math.random() * 3);
  let col: number = Math.floor(Math.random() * 3);
  let test: boolean = false

  while (test) {
    if (board[col][line] == 1) {
      
    }
  }
}

displayBoard(boards);
iaPlay(boards);
displayBoard(boards);
