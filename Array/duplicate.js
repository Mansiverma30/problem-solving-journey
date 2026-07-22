function duplicate(nums) {
    let slow = 0
    let fast = 0
    while (fast < nums.length) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (nums[fast] === nums[slow]) {
            return nums[fast]
        }
    }
}

console.log(duplicate([3, 1, 3, 4, 2]))