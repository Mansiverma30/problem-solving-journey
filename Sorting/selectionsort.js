function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    return nums
}

console.log(selectionSort([5, 1, 4, 2, 8]))

// best = avg = worst = O(n²)