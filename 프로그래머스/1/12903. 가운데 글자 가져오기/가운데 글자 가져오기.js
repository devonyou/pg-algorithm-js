function solution(s) {
    const arr = s.split('')
    const avg = arr.length / 2
    return arr.length % 2 ? arr[Math.ceil(avg) - 1] : arr[avg - 1] + arr[avg]
}