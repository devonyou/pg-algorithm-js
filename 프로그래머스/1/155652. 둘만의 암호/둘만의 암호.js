function solution(s, skip, index) {
    let result = ''
    const codes = []
    
    for(let i='a'.charCodeAt(0); i<='z'.charCodeAt(0); i++){
        const char = String.fromCharCode(i)
        if(![...skip].includes(char)) codes.push(i)
    }
    
    for(let i=0; i<s.length; i++){
        const current_code = s[i].charCodeAt(0)
        const find_index = codes.indexOf(current_code)
        const find_code = codes[(find_index + index) % (26 - skip.length)]
        result += String.fromCharCode(find_code)
    }
        
    return result
}