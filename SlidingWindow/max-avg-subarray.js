function maxAvg(nums, k) {
    let max = 0
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    max = sum
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k]
        max = Math.max(max, sum)
    }
    return max / k
}

console.log(maxAvg([1, 12, -5, -6, 50, 3], 4))