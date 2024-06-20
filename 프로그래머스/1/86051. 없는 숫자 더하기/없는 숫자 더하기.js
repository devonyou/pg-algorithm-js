function solution(numbers) {
    let sum = 0
    for (let i = 0; i <= 9; i++) {
        sum += numbers.findIndex(num => num === i) < 0 ? i : 0
    }
    return sum
    
    
}