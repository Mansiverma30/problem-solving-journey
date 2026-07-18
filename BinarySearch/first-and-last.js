function binarySearchFirst(arr, k, left, right) {
    let ans = -1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === k) {
            ans = mid
            right = mid - 1
        } else if (arr[mid] > k) {
            right = mid - 1

        } else {
            left = mid + 1
        }
    }
    return ans
}
function binarySearchlast(arr, k, left, right) {
    let ans = -1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === k) {
            ans = mid
            left = mid + 1
        } else if (arr[mid] > k) {
            right = mid - 1

        } else {
            left = mid + 1
        }
    }
    return ans
}

function searchRange(nums, k) {
    let first = binarySearchFirst(nums, k, 0, nums.length - 1)
    let last = binarySearchlast(nums, k, 0, nums.length - 1)
    return [first, last]
}

let nums = [5, 7, 7, 8, 8, 8, 10]

console.log(searchRange(nums, 8))