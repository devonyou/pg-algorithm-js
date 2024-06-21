function solution(t, p) {
    const list = [...t].map((v, i) => t.slice(i, i+p.length)).filter(v=>v.length === p.length)
    return list.filter(v => Number(v) <= Number(p)).length
}