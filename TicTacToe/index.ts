
const boards: number[][] = [[0,0,0],[0,0,0],[0,0,0]]

function displayBoard(board: number[][]):void {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}


function play(board: number[][]):number {
    let line = Math.floor(Math.random() * 2) + 1;
    let col = Math.floor(Math.random() * 2) + 1;
    board[line][col] =
    
    
}



displayBoard(boards)