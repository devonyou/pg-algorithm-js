function solution(a, b, c) {
    const arr = [a, b, c]
    const dupl = {}
    arr.forEach(item => {dupl[item] = (dupl[item] || 0) + 1})
    const count = Object.values(dupl)
    const max = Math.max(...count)
    
    if(max === 1){
        return a + b + c
    } else if(max === 2) {
        return (a + b + c) * (a**2 + b**2 + c**2)
    } else if(max === 3){
        return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    }
}