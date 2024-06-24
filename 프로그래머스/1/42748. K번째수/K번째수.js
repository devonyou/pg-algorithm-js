function solution(array, commands) {
    
    const result = []
    
    function findCommand(arr, [i, j, k]){
        return arr.slice(i-1, j).sort((a,b)=>a-b)[k-1]
    }
    
    commands.forEach((v, i) => {
        result.push(findCommand(array, v))  
    })
    
    return result
    
}

