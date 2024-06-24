function solution(strings, n) {
    const result = strings.sort((a, b) => {
        const ne = a.split('')[n]
        const pr = b.split('')[n]
        
        if(ne !== pr) return ne.charCodeAt(0) - pr.charCodeAt(0)
        else return a.localeCompare(b) <= 0 ? -1 : 1
    })
    
    return result
}