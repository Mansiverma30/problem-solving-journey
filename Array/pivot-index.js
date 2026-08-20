function pivotIndex(nums) {
    let leftSum = 0
    let rightSum = 0
    let totalSum = 0
    for (const n of nums) {
        totalSum += n
    }
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0) leftSum += nums[i - 1]
        rightSum = totalSum - leftSum - nums[i]
        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))