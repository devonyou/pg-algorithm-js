function solution(a, b) {
    return a.reduce((acc, v, i)=> {return (acc += b[i] * v)} , 0)
}