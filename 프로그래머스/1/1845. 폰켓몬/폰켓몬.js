function solution(nums) {
    const m = Math.floor(nums.length / 2)
    const d = [... new Set(nums)].length
    
    return Math.min(m,d)
}