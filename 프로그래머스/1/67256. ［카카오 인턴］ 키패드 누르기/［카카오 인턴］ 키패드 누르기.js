function solution(numbers, hand) {
    function diff_position(current, number) {
        const obj = {
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2],
            10: [3, 0],
            0: [3, 1],
            12: [3, 2],
        }
        const current_pos = obj[current]
        const number_pos = obj[number]
        return Math.abs(number_pos[0] - current_pos[0]) + Math.abs(number_pos[1] - current_pos[1])
    }

    let current_left = 10
    let current_right = 12

    return numbers.reduce((acc, v, i) => {
        let flg = ''
        if ([1, 4, 7].includes(v)) {
            flg = 'L'
        } else if ([3, 6, 9].includes(v)) {
            flg = 'R'
        } else {
            const diff_left = diff_position(current_left, v)
            const diff_right = diff_position(current_right, v)

            if (diff_left === diff_right && hand === 'left') flg = 'L'
            else if (diff_left === diff_right && hand === 'right') flg = 'R'
            else if (diff_left < diff_right) flg = 'L'
            else if (diff_left > diff_right) flg = 'R'
        }

        if (flg === 'L') {
            current_left = v
        } else if(flg === 'R') {
            current_right = v
        }

        acc.push(flg)
        return acc
    }, []).join('')
}