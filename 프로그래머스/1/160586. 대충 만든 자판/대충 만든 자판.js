function solution(keymap, targets) {
    
    return targets.map((v)=>{
        const sum = [...v].reduce((acc, rv, i) => {
            let min = Infinity
            for(const k of keymap){
                const index = k.indexOf(rv)
                if(index !== -1 && min > index) min = index + 1
            }
            if (min === Infinity) return -Infinity
            else return (acc += min)
        }, 0)
        return sum === -Infinity ? -1 : sum
    })
}