function solution(x) {
    const sum = String(x).split('').reduce((acc, v) => acc + Number(v), 0)
    return x % sum ? false : true 
}