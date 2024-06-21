function solution(n) {
    
    function formation(n, m){
        const result = []
        while(n > 0){
            const r = n % m
            n = parseInt(n / m);
            result.push(r)
        }
        return result
    }
    
    function formation10(arr, m){
        let sum = 0
        const list = reverse(arr)
        for(let i=0; i<list.length; i++){
            sum += (m ** i * arr[i])
        }
        return sum
    }
    
    function reverse(arr){
        const result = arr
        const end = Math.floor(result.length / 2)
        for(let i=0; i<end; i++){ 
            const temp = result[result.length - 1 - i]
            result[result.length - 1 - i] = result[i]
            result[i] = temp
        }
        return result
    }
    
    const three = formation(n, 3)
    const ten = formation10(three, 3)
    return ten
    
}