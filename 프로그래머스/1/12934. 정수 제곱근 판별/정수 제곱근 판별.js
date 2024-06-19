function solution(n) {
    let num = 0
    let flg = true
    while (flg) {
        num++
        if (num ** 2 === n) {
            flg = false
        } else if (num ** 2 > n) {
            num = 0
            break
        }
    }
    if(num) return (num + 1)**2
    else return -1
}