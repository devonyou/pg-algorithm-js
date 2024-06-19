function solution(ineq, eq, n, m) {
    const operator = {
        '<=': (a, b) => a <= b,
        '>=': (a, b) => a >= b,
        '<!': (a, b) => a < b,
        '>!': (a, b) => a > b,
    }

    const fn = operator[ineq + eq]
    const result = !!fn(n, m) ? 1 : 0
    return result
}