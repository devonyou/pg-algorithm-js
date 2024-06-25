function solution(babbling) {
    const result = babbling
        .map((v, i) => v.replace(/aya/g, '1').replace(/ye/g, '2').replace(/woo/g, '3').replace(/ma/g, '4'))
        .filter(v => Number(v))
        .filter(v => !/(.)\1/.test(v))
    return result.length
}