function solution(food) {
    const temp = {}
    const result = []
    
    food.forEach((v, i) => {if(i > 0) temp[i] = Math.floor(v/2)})
    
    for(let i=1; i<=food.length; i++){
        for(let j=0; j<temp[i]; j++){
            result.push(i)
        }
    }
    
    result.push(...[...result].reverse())
    result.splice(Math.floor(result.length / 2) , 0, 0)
    
    return result.join('')
}