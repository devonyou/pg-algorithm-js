function solution(s) {
    let counter = 0
    let ch = ''
    let cnt = 0

    for (let i = 0; i < s.length; i++) {
        if (cnt === 0) {
            counter++
            ch = s[i]
            cnt++
        } else {
            if (ch !== s[i]) cnt--
            else cnt++
        }
    }
    return counter
}