function solution(s, n) {
    const start = 'a'.charCodeAt(0)
    const end = 'z'.charCodeAt(0)
    const count = end - start + 1
    const shift = n % count
    if(shift === 0) return s
    
    const r = [...s].map((v, i)=>{
        if(v === ' ') return ' '
        const is_upper = v.toUpperCase() === v
        const code = v.toLowerCase().charCodeAt(0)
        const char_code = ((code + shift - start) % count) + start
        const alpha = String.fromCharCode(char_code)
        return is_upper ? alpha.toUpperCase() : alpha.toLowerCase()
    })
    
    return r.join('')
}