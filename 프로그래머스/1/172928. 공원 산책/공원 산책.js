function solution(park, routes) {
    let current = []
    const arr= park

    arr.forEach((v, i) => {if (v.includes('S')) current = [i, [...v].indexOf('S')]})
    

    for (let i = 0; i < routes.length; i++) {
        let x, y
        let flg = true
        const [v, c] = routes[i].split(' ')
        const [current_x, current_y] = current

        for (let j = 1; j <= c; j++) {
            if (v === 'E') {
                x = current_x
                y = current_y + j
            } else if (v === 'W') {
                x = current_x
                y = current_y - j
            } else if (v === 'S') {
                x = current_x + j
                y = current_y
            } else if (v === 'N') {
                x = current_x - j
                y = current_y
            }

            if (
                x >= arr.length || 
                y >= arr[0].length || 
                x < 0 ||
                y < 0 ||
                arr[x][y] === 'X'
            ) {
                flg = false
                break
            }
        }

        if (flg) current = [x, y]
    }
    
    return current
}