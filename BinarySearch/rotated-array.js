function search(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target <= nums[mid]) {
                right = mid - 1
            } else left = mid + 1

        } else {
            if (target >= nums[mid + 1] && target <= nums[right]) {
                left = mid + 1
            } else right = mid

        }
    }
    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))