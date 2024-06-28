function solution(bandage, health, attacks) {
    let conn = 0
    let current_health = health
    const end = attacks[attacks.length - 1][0]
    const max = health

    const power = attacks.reduce((acc, v) => {
        acc[v[0]] = v[1]
        return acc
    }, {})

    for (let i = 0; i <= end; i++) {
        const attack = power[i]
        if (attack) {
            current_health -= attack
            conn = 0
        } else {
            conn++
            current_health += bandage[1]
        }

        if (conn === bandage[0]) {
            conn = 0
            current_health += bandage[2]
        }

        current_health = Math.min(current_health, max)
        if (current_health <= 0) return -1
    }

    return current_health
}