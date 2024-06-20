function solution(a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    while (min <= max) {
        sum += min
        min++
    }
    return sum
}