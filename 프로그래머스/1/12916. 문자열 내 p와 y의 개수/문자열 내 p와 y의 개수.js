function solution(s){
    const fn = (string, sep) =>
        string
            .toUpperCase()
            .split('')
            .filter((v, i) => v === sep).length
    const countP = fn(s, 'P')
    const countY = fn(s, 'Y')

    return countP === countY
}