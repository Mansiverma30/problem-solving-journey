function majority(nums) {
    let ans = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            ans = nums[i]
            count++
        }
        else if (ans == nums[i]) {
            count++
        } else count--
    }
    return ans
}

console.log(majority([2, 2, 1, 1, 1, 2, 2]))