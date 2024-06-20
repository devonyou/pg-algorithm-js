function solution(n, m) {
    const result = []
    
    function getMaxCommonDivisor(a, b){
        if(b === 0) return a
        return getMaxCommonDivisor(b, a % b)
    }
    
    
    
    function getMinCommonMultiple(a, b){
        return Math.abs(a * b) / getMaxCommonDivisor(a, b);
    }
    
    const max_common_divisor = getMaxCommonDivisor(n, m)
    const min_common_multiple = getMinCommonMultiple(n, m)
    
    result.push(max_common_divisor)
    result.push(min_common_multiple)
    
    
    return result
}