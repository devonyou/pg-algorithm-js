function solution(number, limit, power) {
    function getDivisor(num){
        const divisors = []
        for(let i=1; i<=Math.sqrt(num); i++){
            if(!(num % i)){
                divisors.push(i)
                if(i !== (num / i)) divisors.push(num / i)
            }
        }
        return divisors
    }
    
    const arr = []
    for(let i=1; i<=number; i++){
        arr.push(getDivisor(i).length)
    }
    
    return arr.reduce((acc, v, i) => {
        if(v > limit) return acc + power
        else return acc + v
    }, 0)
    
    
}