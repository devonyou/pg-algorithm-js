function solution(n, m) {
    const result = []
    
    function getMaxCommonDivisor(a, b){
        if(b === 0) return a
        return getMaxCommonDivisor(b, a % b)
    }
    
    
    
    function getMinCommonMultiple(a, b){
        // return Math.abs(a * b) / getMaxCommonDivisor(a, b);
        let i = Math.max(a, b) - 1
        while (++i) {
            if (!(i % a) && !(i % b)) break
        }
        return i
    }
    
    const max_common_divisor = getMaxCommonDivisor(n, m)
    const min_common_multiple = getMinCommonMultiple(n, m)
    
    result.push(max_common_divisor)
    result.push(min_common_multiple)
    
    
    return result
}