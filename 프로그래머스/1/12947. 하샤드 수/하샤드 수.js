function solution(x) {
    const arr = []
    let num = x
    for (let i = 0; i < String(x).length; i++) {
        const temp = Math.floor(num % 10)
        arr.push(temp)
        num = num / 10
    }

    const len = arr.length
    for (let i = 0; i < Math.floor(len / 2); i++) {
        const temp = arr[len - 1 - i]
        arr[len - 1 - i] = arr[i]
        arr[i] = temp
    }

    function reduce(iter, fn, init) {
        let acc = init
        for (let i = 0; i < iter.length; i++) {
            acc = fn(acc, iter[i])
        }
        return acc
    }

    const sum = reduce(arr, (a, b) => a + b, 0)
    return x % sum ? false : true
}