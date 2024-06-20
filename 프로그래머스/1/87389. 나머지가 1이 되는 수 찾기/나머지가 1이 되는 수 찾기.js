function solution(n) {
    let result = 0
    while(++result) if(n % result === 1) return result
}