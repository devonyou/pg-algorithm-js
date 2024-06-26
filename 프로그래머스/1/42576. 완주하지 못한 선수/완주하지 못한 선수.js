function solution(participant, completion) {
    // return participant.filter(v => {
    //     const index = completion.indexOf(v)
    //     if(index >= 0) completion.splice(index, 1)
    //     return index < 0
    // })[0]
    
    participant.sort()
    completion.sort()
    
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]) return participant[i]
    }
}