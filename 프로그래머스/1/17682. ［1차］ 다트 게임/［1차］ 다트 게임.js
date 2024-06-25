function solution(dartResult) {
    const str_score = dartResult.match(/\d{1,2}[\w+][*#]?/gi)

    const result = str_score.reduce((acc, v, i) => {
        let [a, b, c, d] = v
        if(a === '1' && b === '0'){ a = 10; b = c; c = d; }
        let score = Number(a) || 0

        if (b === 'S') score = score ** 1
        else if (b === 'D') score = score ** 2
        else if (b === 'T') score = score ** 3

        if (c === '*') {
            score = score * 2
            if(i > 0) acc[i - 1] = acc[i - 1] * 2
        } else if (c === '#') {
            score = score * -1
        }
        
        acc[i] = score

        return acc
    }, [])
    
    return result.reduce((a, b) => a+b)
}