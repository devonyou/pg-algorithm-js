function solution(s) {
    function splitChar(str) {
        if (str.length === 1) return str
        let first_count = 1
        let other_count = 0
        let i = 1
        while (first_count !== other_count) {
            if ([...str][0] === [...str][i]) first_count++
            else other_count++
            i++
        }
        return str.slice(0, i)
    }

    let i = 0
    let str = s
    while (str) {
        const split_char = splitChar(str)
        str = str.replace(split_char, '')
        i++
    }
    
    return i
}