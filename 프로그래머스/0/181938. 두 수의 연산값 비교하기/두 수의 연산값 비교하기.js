function solution(a, b) {
    const calc1 = (a, b) => Number(`${a}${b}`)
    const calc2 = (a, b) => 2 * Number(a) * Number(b)
    const result = Math.max(calc1(a, b), calc2(a, b))
    return result
}