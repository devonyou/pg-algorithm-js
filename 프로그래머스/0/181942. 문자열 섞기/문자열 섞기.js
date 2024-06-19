function solution(str1, str2) {
    let result = ''
    const a = str1.split('')
    const b = str2.split('')
    for(let i=0; i<a.length; i++){
        result += `${a[i]}${b[i]}`
    }
    
    return result;
}