function solution(s) {
    return [...s].map((v, i) => {
        const str = s.slice(0, i).split('').reverse().join('')
        const index = str.indexOf(v)
        return index < 0 ? -1 : index + 1
    })
}