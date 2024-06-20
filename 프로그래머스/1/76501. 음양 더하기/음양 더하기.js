function solution(absolutes, signs) {
    return absolutes.reduce((acc, v, i) => acc += signs[i] ? v : -v, 0)
}