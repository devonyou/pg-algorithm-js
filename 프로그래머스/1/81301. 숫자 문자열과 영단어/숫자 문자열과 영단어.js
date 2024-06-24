function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    const arr = s.split('');
    let temp = ''
    const result = [];
    
    
    for(let i=0; i<arr.length; i++){
        if(!isNaN(Number(arr[i]))) {
            result.push(arr[i])
        } else {
            temp += arr[i]
            if(numbers.includes(temp)) {
                result.push(numbers.indexOf(temp))
                temp = ''
            }
        }
    }
    
    return Number(result.join(''))
}