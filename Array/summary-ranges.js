function summaryRanges(nums) {
    let ans = []
    let i = 0
    while (i < nums.length) {
        let start = nums[i]
        while (nums[i + 1] - nums[i] === 1) {
            i++
        }
        let end = nums[i]
        if (start === end) {
            ans.push(`${start}`)
        } else ans.push(`${start}->${end}`)
        i++
    }
    return ans
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))