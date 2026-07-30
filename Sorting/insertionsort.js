function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let key = nums[i]
        let j = i
        while (j > 0 && nums[j - 1] > key) {
            nums[j] = nums[j - 1]
            j--
        }
        nums[j] = key
    }
    return nums
}

console.log(insertionSort([67, 44, 82, 17, 20]))

// Best = O(n)
// Avg = worst = O(n²)