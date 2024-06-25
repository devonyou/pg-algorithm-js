function solution(n, m, section) {
    let result = 0
    let current = 0
    for(const v of section){
        if(current < v){
            result++
            current = v + m -1
        }
    }
    
    return result
    
}