// Problem: Minimum Size Subarray Sum
// Input: nums = [2,3,1,2,4,3], target = 7
// Output: 2
//
// Here I've to find the minimum length of a contiguous subarray whose sum is greater than or equal to target. If no such subarray exists, return 0.

// Brute Force Solution
// Time Complexity: O(n²) Space Complexity: O(1)
//
// Here I:
// 1. Generate all possible subarrays.
// 2. Keep calculating their sum.
// 3. As soon as the sum becomes >= target, update the minimum length.
// 4. Return the smallest valid length found.

function bruteForce(nums, target) {
    let minLength = Infinity

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        let length = 0
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            length = j - i + 1
            if (sum >= target) {
                minLength = Math.min(minLength, length)
                break
            }
        }
    }

    return minLength === Infinity ? 0 : minLength
}

// Optimized Solution (Dynamic Sliding Window)
// Time Complexity: O(n) Space Complexity: O(1)

// Here I:
// 1. Expand the window by moving right.
// 2. Keep adding elements to the current sum.
// 3. Once sum >= target, the current window becomes valid.
// 4. Update the minimum length.
// 5. Shrink the window from the left while it remains valid.
// 6. Continue until the entire array is processed.

function optimized(nums, target) {
    let left = 0
    let minLength = Infinity
    let sum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left]
            left++
        }
    }

    return minLength === Infinity ? 0 : minLength
}

console.log(bruteForce([2, 3, 1, 2, 4, 3], 7))
console.log(optimized([2, 3, 1, 2, 4, 3], 7))

// Pattern Learned:
// 1. Dynamic Sliding Window
// 2. Expand and Shrink Window
// 3. Minimum Length Subarray Problems

// Key Observations:

// 1. Brute force repeatedly recalculates subarray sums, leading to O(n²).

// 2. The window expands by moving right and adding elements to the sum.

// 3. Once sum >= target, we have a valid window candidate.

// 4. Instead of stopping immediately, we try to shrink the window from the left to find a smaller valid window.

// Example:

// nums = [2,3,1,2,4,3]
// target = 7

// Window:

// [2,3,1,2]
// sum = 8

// Valid window found.
// Length = 4

// Shrink:

// [3,1,2]
// sum = 6

// Invalid again.
// Continue expanding.

// Later:

// [4,3]
// sum = 7

// Length = 2

// Better answer found.

// Biggest Learning:

// Fixed Sliding Window:
// Window size remains constant.

// Dynamic Sliding Window:
// Window size changes based on a condition.

// Dynamic Sliding Window Pattern:

// Expand Window
// ↓
// Check Condition
// ↓
// Update Answer
// ↓
// Shrink Window
// ↓
// Repeat