var boards = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
function displayBoard(board) {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}
function play(board) {
    var line = Math.floor(Math.random() * 2) + 1;
    var col = Math.floor(Math.random() * 2) + 1;
    board.push([line, col]);
    return board;
}
displayBoard(boards);
