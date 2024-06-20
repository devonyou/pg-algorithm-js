function solution(n) {
    let i =0
    let str = ''
    while(++i <= n){
         str += i % 2 ? '수' : '박'
    }
    return str
}