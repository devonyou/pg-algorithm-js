function solution(k, score) {
    const result = []
    const temp = []
    
    for(let i=0; i<score.length; i++){
        const _score = score[i]
        temp.push(_score)
        min = temp.sort((a, b) => a - b).slice(-k)[0]
        result.push(min)
    }
    
    return result
}
    