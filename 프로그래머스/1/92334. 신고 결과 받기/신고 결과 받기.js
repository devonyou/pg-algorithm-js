function solution(id_list, report, k) {
    const report_obj = report.reduce((acc, v, i) => {
        const split = v.split(' ')
        const reporter_id = split[0]
        const reported_id = split[1]
        const reported_count = acc[reported_id] ? acc[reported_id][0] : 0
        const reporter_list = acc[reported_id] ? acc[reported_id][1] : []

        if (reporter_list.includes(reporter_id)) return acc

        if (reported_count) {
            acc[reported_id] = [reported_count + 1, [...reporter_list, reporter_id]]
        } else {
            acc[reported_id] = [1, [reporter_id]]
        }
        return acc
    }, {})

    const list = Object.entries(report_obj)
        .filter(v => v[1][0] >= k)
        .reduce((acc, v, i) => {
            const keys = v[1][1].map(mv => mv)
            keys.forEach(key => {
                if (acc[key]) acc[key] = acc[key] + 1
                else {
                    acc[key] = 1
                }
            })
            return acc
        }, {})

    const result = id_list.map(v => {
        return list[v] ? list[v] : 0
    })

    return result
}