function solution(n) {
    let result = 0
    let start = (n % 2) ? 1 : 0
    for (let i = start; i <= n; i+=2) {
        result += (n % 2) ? i : i * i
    }
    return result
}