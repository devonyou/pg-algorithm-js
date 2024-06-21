function solution(d, budget) {
    let sum = 0
    const count = d
        .sort((a, b) => a - b)
        .reduce((acc, v, i) => {
            sum += v
            if (sum <= budget) {
                return (acc += 1)
            } else {
                return acc
            }
        }, 0)

    return count
    
}