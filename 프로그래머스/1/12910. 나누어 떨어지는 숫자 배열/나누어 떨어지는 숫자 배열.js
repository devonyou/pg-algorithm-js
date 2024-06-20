function solution(arr, divisor) {
    const result = arr.filter(v => !(v % divisor)).sort((a, b) => a - b)
    return result.length ? result : [-1]
}