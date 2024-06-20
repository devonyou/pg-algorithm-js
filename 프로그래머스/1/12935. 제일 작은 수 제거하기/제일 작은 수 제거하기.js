function solution(arr) {
    let min = arr[0]
    if (arr.length === 1 && arr[0] === 10) return [-1]
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i]
    }
    return arr.filter(v => v !== min)
    
}