function solution(my_string, overwrite_string, s) {
    // const start = s
    // const end = overwrite_string.length + s
    // const r = my_string.slice(start, end)
    // const result = my_string.replace(r, overwrite_string)
    // return result
    
    const start = my_string.slice(0, s);
    const end = my_string.slice(s + overwrite_string.length);
    return start + overwrite_string + end;
    
    
}

