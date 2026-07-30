function mergeSort(nums) {
    if (nums.length === 1) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left, right)
}

function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}

console.log(mergeSort([10, 14, 19, 26, 27, 31, 33, 35, 42, 44, 0]))

// Best = Avg = worst = O(nlogn)