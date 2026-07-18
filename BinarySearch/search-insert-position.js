function searchInsert(arr, k) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === k) {
            return mid
        } else if (arr[mid] > k) {
            right = mid - 1

        } else {
            left = mid + 1
        }
    }
    return left
}

let arr = [1, 3, 5, 6]
console.log(searchInsert(arr, 5))
console.log(searchInsert(arr, 2))
console.log(searchInsert(arr, 7))
console.log(searchInsert(arr, 0))