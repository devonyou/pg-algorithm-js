function solution(friends, gifts) {
    const end = friends.length
    const table = friends.map(() => friends.map(() => 0))
    const friends_obj = friends.reduce((acc, v, i) => {
        acc[v] = i
        return acc
    }, {})
    const rank = friends.reduce((acc, v, i) => {
        acc[v] = 0
        return acc
    }, {})
    const next = friends.reduce((acc, v, i) => {
        acc[v] = 0
        return acc
    }, {})

    gifts.forEach(info => {
        const [a, b] = info.split(' ')
        table[friends_obj[a]][friends_obj[b]]++
    })

    for (let i = 0; i < end; i++) {
        rank[friends[i]] = table[i].reduce((acc, v) => (acc += v), 0)
        for (let j = 0; j < end; j++) {
            rank[friends[i]] -= table[j][i]
        }
    }

    for (let i = 0; i < end; i++) {
        for (let j = i + 1; j < end; j++) {
            if (i === j) continue
            if (table[i][j] > table[j][i]) next[friends[i]]++
            if (table[i][j] < table[j][i]) next[friends[j]]++
            if (table[i][j] === table[j][i]) {
                if (rank[friends[i]] > rank[friends[j]]) next[friends[i]]++
                if (rank[friends[i]] < rank[friends[j]]) next[friends[j]]++
            }
        }
    }

    const result = Object.entries(next).map(v => v[1])

    return Math.max(...result)
}