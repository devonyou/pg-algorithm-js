function solution(today, terms, privacies) {
    const [c_year, c_month, c_day] = today.split('.').map(v => +v)
    const obj = terms.reduce((acc, v, i) => {
        const [a, b] = v.split(' ')
        acc = { ...acc, [a]: +b }
        return acc
    }, {})

    terms.forEach(v => {
        const [a, b] = v.split(' ')
        obj[a] = +b
    })

    const result = privacies.reduce((acc, v, i) => {
        const [a, b] = v.split(' ')
        const [year, month, day] = a.split('.').map(v => +v)

        let dest_year = year + Math.floor(obj[b] / 12)
        let dest_month = month + (obj[b] % 12)
        let dest_day = day - 1

        if (dest_month > 12) {
            dest_year += 1
            dest_month %= 12
        }

        if (dest_day === 0) {
            dest_day = 28
            dest_month -= 1
        }


        if (c_year > dest_year) {
            acc.push(i + 1)
        } else if (c_year === dest_year && c_month > dest_month) {
            acc.push(i + 1)
        } else if (c_year === dest_year && c_month === dest_month && c_day > dest_day) {
            acc.push(i + 1)
        }
        return acc
    }, [])

    return result
}
