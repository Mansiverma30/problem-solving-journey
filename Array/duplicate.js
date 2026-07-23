function duplicate(nums) {
    let slow = 0
    let fast = 0
    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast);

    let ptr = 0
    while (ptr !== slow) {
        ptr = nums[ptr]
        slow = nums[slow]
    }
    return ptr
}

console.log(duplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]))