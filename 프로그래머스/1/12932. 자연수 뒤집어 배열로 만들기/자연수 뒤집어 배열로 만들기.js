function solution(n) {
    const arr = String(n).split('')
    const result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(Number(arr[i]))
    }
    return result
}