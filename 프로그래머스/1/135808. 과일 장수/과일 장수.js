function solution(k, m, score) {
    const apples = score.sort((a, b) => b-a)
    const result = []
    for(let i=0; i<apples.length; i+=m){
        result.push(apples.slice(i, i+m))
    }
    
    return result.filter(v => v.length === m)
        .reduce((acc, v, i)=>{
        const p = Math.min(...v)
        return acc + v.length * p
    }, 0)
    
}