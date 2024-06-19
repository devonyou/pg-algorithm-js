function solution(number, n, m) {
    const result = !(number % n) && !(number % m) ? 1 : 0
    return result
}