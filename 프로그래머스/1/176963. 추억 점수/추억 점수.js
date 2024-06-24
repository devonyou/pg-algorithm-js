function solution(name, yearning, photo) {
    const score = {}
    for (let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i]
    }

    return photo.map((v, i) => {
        return v.reduce((a, b) => a + (score[b] || 0), 0)
    })
}