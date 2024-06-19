function solution(n)
{
    const result = String(n).split('').reduce((acc, v) => (acc += Number(v)), 0)
    return result
}