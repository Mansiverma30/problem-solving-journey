function binarySearch(arr, k) {
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
    return -1
}

console.log(binarySearch([1, 3, 5, 7, 9], 7))
console.log(binarySearch([1, 3, 5, 7, 9], 1))
console.log(binarySearch([1, 3, 5, 7, 9], 9))
console.log(binarySearch([1, 3, 5, 7, 9], 6))