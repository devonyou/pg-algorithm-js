function solution(N, stages) {
    const obj = {}

    for (let i = 1; i <= N; i++) {
        obj[i] = stages.filter(v => v >= i).length
    }

    const result = Object.entries(obj)
        .map((v, i) => {
            const count = stages.filter(s => s === Number(v[0])).length
            return [v[0], count / v[1]]
        })
        .sort((a, b) => {
            if (b[1] === a[1]) return a[0] - b[0]
            else return b[1] - a[1]
        })
        .map(v => Number(v[0]))

    return result
}