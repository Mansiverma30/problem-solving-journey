function missing(nums) {
    let n = nums.length
    let nSum = Math.floor((n * (n + 1)) / 2)
    let sum = 0
    for (const num of nums) {
        sum += num
    }
    return nSum - sum
}

console.log(missing([3, 0, 1]))