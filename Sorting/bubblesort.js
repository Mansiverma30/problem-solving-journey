function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let swapped = false
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
                swapped = true
            }
        }
        if (!swapped) break
    }
    return nums
}

console.log(bubbleSort([5, 1, 4, 2, 8]))

/*
Idea:
• Compare adjacent elements.
• Swap if left > right.
• Largest element bubbles to the end after every pass.

Time:
Best    O(n)
Average O(n²)
Worst   O(n²)

Space:
O(1)

Stable:
Yes

In-place:
Yes
*/