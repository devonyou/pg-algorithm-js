function solution(ingredient) {
    let result = 0
    const sep = '1231'
    const arr = []

    for (let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i])

        if (arr.length >= 4) {
            const burger = arr.slice(-4).join('')

            if (burger === sep) {
                arr.splice(-4)
                result++
            }
        }
    }

    return result
}