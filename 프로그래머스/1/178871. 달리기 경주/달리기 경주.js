function solution(players, callings) {
    const obj = players.reduce((acc, v, i) => {
        acc[v] = i
        return acc
    }, {})
    
    for(let i=0; i<callings.length; i++){
        const v = obj[callings[i]];
        const temp = players[v - 1];
        
        players[v - 1] = callings[i];
        players[v] = temp;
        obj[callings[i]] = v - 1;
        obj[temp] = v;
    }
    
    return players
}
