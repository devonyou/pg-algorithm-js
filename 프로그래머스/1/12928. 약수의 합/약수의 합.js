function solution(n) {
    const divisors = Array(n)
        .fill(null)
        .map((v, i) => i + 1)
        .filter((v, i) => !(n % v))
    return divisors.reduce((acc, v) => acc + v, 0)
}