function minimum(nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        }
    }
    return nums[left]
}

console.log(minimum([3, 4, 5, 1, 2]))