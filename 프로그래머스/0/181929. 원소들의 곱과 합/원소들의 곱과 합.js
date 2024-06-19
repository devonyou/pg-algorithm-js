function solution(num_list) {
    let result
    
    const multi = num_list.reduce((acc, v) => acc * v, 1)
    const sum_pow = num_list.reduce((acc, v) => acc + v, 0) ** 2
    
    return multi <= sum_pow ? 1 : 0
}