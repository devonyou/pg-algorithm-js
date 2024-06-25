function solution(nums) {
    
    function isPrime(num){
        for(let i=2; i<num; i++){
            if(!(num % i)) return false
        }
        return num > 1
    }
    
    const arr = []
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    
    return arr.reduce((acc, v)=> {
        if(isPrime(v)) return acc + 1
        return acc + 0
    }, 0)
}