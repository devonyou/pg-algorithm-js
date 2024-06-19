function solution(my_string, k) {
    const result = Array(k).fill(my_string).join().replace(/,/g, '')
    return result
}