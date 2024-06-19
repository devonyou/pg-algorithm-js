function solution(a, d, included) {
    const arr = Array(included.length)
        .fill(a)
        .map((n, i) => n + i * d)

    const result = arr.reduce((acc, v, i) => {
        if (included[i]) acc += v
        return acc
    }, 0)

    return result
    
}