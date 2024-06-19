function solution(a, b) {
    const sum1 = Number(`${a}${b}`)
    const sum2 = Number(`${b}${a}`)
    
    const result = sum1 >= sum2 ? sum1 : sum2
    
    return result
}