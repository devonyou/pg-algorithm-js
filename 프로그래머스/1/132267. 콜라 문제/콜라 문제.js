function solution(a, b, n) {
    
    let result = 0
    while(n >= a){
        const r = Math.floor(n / a) * b
        result += r
        n = r + (n % a)
    }
        
    return result
}

