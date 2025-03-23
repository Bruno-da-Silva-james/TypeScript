var boards = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
function displayBoard(board) {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}
function iaPlay(board) {
    var line = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);
    var test = false;
    while (test) {
        if (board[col][line] == 1) {
        }
    }
}
displayBoard(boards);
iaPlay(boards);
displayBoard(boards);
