function solution(s) {
    const arr = s.split(' ')
    return arr.map((string, i)=>{
        return [...string].map((v, i) => i%2 ? v.toLowerCase() : v.toUpperCase()).join('')
    }).join(' ')
}