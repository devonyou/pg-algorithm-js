function solution(n, arr1, arr2) {
    
    const dec2 = (number, len) => {
        const result = []
        while(number){
            result.push(number % 2)
            number = Math.floor(number / 2)
        }
        
        while(result.length < len){
            result.push(0)
        }
        
        return result.reverse()
    }
    
    return arr1.map((v, i)=>{
        const bin2arr1 = dec2(arr1[i], n)
        const bin2arr2 = dec2(arr2[i], n)
        
        const result = bin2arr1.map((el, j)=>{
            return bin2arr1[j] + bin2arr2[j] > 0 ? '#': ' '
        })
        
        return result.join('')
    })
}