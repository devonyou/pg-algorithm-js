function solution(n) {
    
    function isPrime(num) {
        if (num <= 1) return false
        else if (num === 2) return true
        else {
            const end = Math.floor(Math.sqrt(num))
            for (let i = 3; i <= end; i++) {
                if (!(num % i)) return false
            }
            return true
        }
    }

    let result = 1
    for (let i = 3; i <= n; i += 2) {
        if (isPrime(i)) result++
    }
    return result
}