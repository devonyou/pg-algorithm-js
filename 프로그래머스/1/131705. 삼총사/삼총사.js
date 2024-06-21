function solution(number) {
    let result = 0

    let i = 0
    while (i < number.length) {
        let j = i + 1
        while (j < number.length) {
            let k = j + 1
            while (k < number.length) {
                console.log(i, j, k)
                const sum = number[i] + number[j] + number[k]
                if (sum === 0) result++
                k++
            }
            j++
        }
        i++
    }
    return result
}