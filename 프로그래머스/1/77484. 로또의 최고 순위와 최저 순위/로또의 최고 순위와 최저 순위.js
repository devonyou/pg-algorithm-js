function solution(lottos, win_nums) {
    const win_count = lottos.filter(v => win_nums.includes(v)).length
    const zero_count = lottos.filter(v => v === 0).length
    const max = win_count + zero_count || 1
    const min = win_count
    
    return [Math.max(7-max, 1), Math.min(7-min, 6)] 
    
    
}