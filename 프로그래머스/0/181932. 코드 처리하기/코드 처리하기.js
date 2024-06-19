function solution(code) {
    let result = ''
    let mode = false
    const arr = code.split('')

    arr.forEach((char, idx) => {
        if (!mode) {
            if (char !== '1' && !(idx % 2)) result += char
        } else {
            if (char !== '1' && idx % 2) result += char
        }

        char === '1' ? (mode = !mode) : null
    })

    return !!result ? result : 'EMPTY'
}