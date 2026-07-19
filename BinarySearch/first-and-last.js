function binarySearch(arr, k, first) {
    let left = 0
    let right = arr.length - 1
    let ans = -1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === k) {
            if (first) {
                ans = mid
                right = mid - 1
            } else {
                ans = mid
                left = mid + 1
            }
        } else if (arr[mid] > k) {
            right = mid - 1

        } else {
            left = mid + 1
        }
    }
    return ans
}

function searchRange(nums, k) {
    let first = binarySearch(nums, k, true)
    let last = binarySearch(nums, k, false)
    return [first, last]
}

let nums = [5, 7, 7, 8, 8, 8, 10]

console.log(searchRange(nums, 8))