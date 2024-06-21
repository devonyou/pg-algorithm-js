function solution(s, n) {
    const start = 'a'.charCodeAt(0)
    const end = 'z'.charCodeAt(0)
    let shift = n % (end - start + 1)
    if(shift === 0) return s
    
    const r = [...s].map((v, i)=>{
        if(v === ' ') return ' '
        const is_upper = v.toUpperCase() === v
        const code = v.toLowerCase().charCodeAt(0)
        let char_code = 0
        if(code + shift > end){
            char_code = start + (((code + shift) % end) - 1)
        } else {
            char_code = code + shift
        }
        const alpha = String.fromCharCode(char_code)
        
        return is_upper ? alpha.toUpperCase() : alpha.toLowerCase()
    })
    
    return r.join('')
}