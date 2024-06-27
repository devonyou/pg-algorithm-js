function solution(wallpaper) {
    const result = [Infinity, Infinity, -Infinity, -Infinity]
    const list = []
    const data = wallpaper.map(v => [...v])

    data.map((x, i) => {
        if (x.includes('#')) x.forEach((y, j) => y === '#' && list.push([i, j]))
    })

    list.forEach(([x, y]) => {
        result[0] = Math.min(result[0], x)
        result[1] = Math.min(result[1], y)
        result[2] = Math.max(result[2], x + 1)
        result[3] = Math.max(result[3], y + 1)
    })
    
    return result
}