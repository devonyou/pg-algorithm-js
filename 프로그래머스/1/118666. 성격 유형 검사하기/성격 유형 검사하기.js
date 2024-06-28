function solution(survey, choices) {
    const score_list = [3, 2, 1, 0, 1, 2, 3]
    const obj = {
        R: 0, //
        T: 0,
        C: 0, //
        F: 0,
        J: 0, //
        M: 0,
        A: 0, //
        N: 0,
    }

    for (let i = 0; i < survey.length; i++) {
        const score = Number(score_list[choices[i] - 1])
        const [a, b] = survey[i]
        if (choices[i] < 4) {
            obj[a] = (obj[a] || 0) + score
        } else if (choices[i] > 4) {
            obj[b] = (obj[b] || 0) + score
        }
    }

    if (obj['R'] - obj['T'] >= 0) delete obj['T']
    else delete obj['R']
    if (obj['C'] - obj['F'] >= 0) delete obj['F']
    else delete obj['C']
    if (obj['J'] - obj['M'] >= 0) delete obj['M']
    else delete obj['J']
    if (obj['A'] - obj['N'] >= 0) delete obj['N']
    else delete obj['A']

    return result = Object.entries(obj).map(v => v[0]).join('')
}