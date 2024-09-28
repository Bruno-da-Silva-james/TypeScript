var boards = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
function displayBoard(board) {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}
function play(board) {
    var line = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);
    board[line][col] = 1;
    console.log(line, col);
}
displayBoard(boards);
play(boards);
displayBoard(boards);
