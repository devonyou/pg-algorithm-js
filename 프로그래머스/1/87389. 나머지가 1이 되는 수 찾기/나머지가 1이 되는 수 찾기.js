function solution(n) {
    let result;
    let flg = true
    let i = 0
    while(flg){
        i++
        if(n % i === 1){
            result = i
            flg = false
        }
        
    }
    return result
}