function partition(left, nums, right) {
    let pivot = nums[right]
    let i = left
    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
    let temp = nums[i]
    nums[i] = nums[right]
    nums[right] = temp
    return i
}

function quickSort(nums, left = 0, right = nums.length - 1) {
    if (left < right) {
        let pivotIndex = partition(left, nums, right)
        quickSort(nums, left, pivotIndex - 1)
        quickSort(nums, pivotIndex + 1, right)
    }
    return nums
}

console.log(quickSort([5, 1, 4, 2, 8]))

/*
1. Choose the highest index value has pivot
2. Take two variables to point left and right of the list
excluding pivot
3. Left points to the low index
4. Right points to the high
5. While value at left is less than pivot move right
6. While value at right is greater than pivot move left
7. If both step 5 and step 6 does not match swap left and right
8. If left ≥ right, the point where they met is new pivot
*/