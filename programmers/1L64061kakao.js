function solution(board, moves) {
    let answer = 0;
    const stack = [];
    const newBoard = [];
    
    for (let i = 0; i < board[0].length; i++) {
        const newLine = [];
        board.forEach(e => {
            if(e[i]) newLine.push(e[i])
        })
        newBoard.push(newLine);
    }

    moves.forEach(e => {
        if(newBoard[e - 1].length) {
            const doll = newBoard[e - 1].shift();
            if(doll === stack[stack.length - 1]) {
                stack.pop();
                answer += 2;
            }
            else {
                stack.push(doll);
            }
        } 
    })

    return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])