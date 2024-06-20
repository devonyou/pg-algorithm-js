function solution(price, money, count) {
    function sum(n, c) {
        if (c === 0) return 0
        return n * c + sum(n, c - 1)
    }
    
    const total_price = sum(price, count)
    
    return money > total_price ? 0 : total_price - money
    
}