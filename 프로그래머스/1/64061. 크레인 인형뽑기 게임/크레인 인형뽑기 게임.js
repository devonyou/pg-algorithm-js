function solution(board, moves) {
    const stack = []
    let result = 0
    
    for(let i=0; i<moves.length; i++){
        const a = moves[i]
        for(let x=0; x<board.length; x++){
            if(board[x][a-1]){
                stack.push(board[x][a-1])
                board[x][a-1] = 0
                break;
            }
        }
        
        for(let j=0; j<stack.length; j++){
            if(stack[j] === stack[j-1]){
                stack.pop()
                stack.pop()
                result += 2
            }
        }
    }
    
    return result
    
}