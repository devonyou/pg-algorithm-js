function solution(arr) {
    return (arr.reduce((acc, v, i) => acc += v, 0) / arr.length) 
}