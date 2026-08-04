function partition(left, nums, right) {
    let pivot = nums[right]
    let i = left
    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] < pivot) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
    let temp = nums[i]
    nums[i] = pivot
    pivot = temp
    return nums
}

function quickSort(nums) {
    let pivot = nums[nums.length - 1]
    let left = 0
    let right = nums.length - 2
    while (left < right) {
        if (nums[left] < pivot) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }
        left++
        right--
    }
    console.log(pivot, nums[left], nums[right])
    return nums
}

console.log(partition(0, [5, 1, 4, 2, 8], 5))

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