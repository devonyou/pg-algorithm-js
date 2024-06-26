function solution(n, lost, reserve) {
    let result
    lost.sort()
    reserve.sort()
    
    lost = lost.filter(v => {
        if(reserve.includes(v)){
            reserve.splice(reserve.indexOf(v), 1)
            return false 
        } else {
            return true
        }
    })
    
    result = n - lost.length
    
    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]
            ) {
                result ++
                reserve.splice(j, 1)
            }
        }
    }
    
    return result
}