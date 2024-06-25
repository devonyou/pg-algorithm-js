function solution(answers) {
    const score = [0, 0, 0]
    const player1 = [1, 2, 3, 4, 5]
    const player2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const player3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === player1[i % 5]) score[0]++
        if (answers[i] === player2[i % 8]) score[1]++
        if (answers[i] === player3[i % 10]) score[2]++
    }

    const max = Math.max(...score)
    
    return Object.entries(score)
            .sort((a, b) => b[1] - a[1])
            .filter(v => v[1] === max)
            .map(v => Number(v[0])+1)
}