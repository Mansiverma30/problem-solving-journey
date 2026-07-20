function peakElem(nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else if (nums[mid] > nums[mid + 1]) {
            right = mid
        }
    }
    return left
}

console.log(peakElem([1, 2, 3, 1]))