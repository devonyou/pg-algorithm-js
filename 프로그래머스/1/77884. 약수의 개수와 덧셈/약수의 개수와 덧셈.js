function solution(left, right) {
    function getDivisior(num) {
        const list = []
        for (let i = 1; i <= num; i++) {
            if (!(num % i)) list.push(i)
        }
        return list
    }

    let result = 0
    for (let i = left; i <= right; i++) {
        const divisor = getDivisior(i)
        result += divisor.length % 2 ? -i : +i
    }
    
    return result
}