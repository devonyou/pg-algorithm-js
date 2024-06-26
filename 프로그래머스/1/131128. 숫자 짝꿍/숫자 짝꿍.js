function solution(X, Y) {
    let result = ''

    for (let i = 9; i >= 0; i--) {
        const s = String(i)
        const x = [...X].filter(v => v === s).length
        const y = [...Y].filter(v => v === s).length
        if (x && y) {
            const min = Math.min(x, y)
            result += s.repeat(min)
        }
    }

    if (!result) return '-1'
    else if (result[0] === '0') return '0'
    else return result
}