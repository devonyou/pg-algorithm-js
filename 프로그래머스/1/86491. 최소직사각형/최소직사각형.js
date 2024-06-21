function solution(sizes) {
    const w = []
    const h = []
    
    sizes.map((arr, i)=> {
        const max = Math.max(arr[0], arr[1])
        const min = Math.min(arr[0], arr[1])
        return [max, min]
    }).forEach(arr => {
        w.push(arr[0])
        h.push(arr[1])
    })
    
    return Math.max(...w) * Math.max(...h)
    
}