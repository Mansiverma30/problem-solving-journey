// Problem: Maximum Subarray
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Here I've to return the largest sum possible from any contiguous subarray

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(nums) {
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(1)

// Here I used Kadane's Algorithm. I kept track of current subarray sum and reset it whenever it became negative because negative sums reduce future subarray sums

function optimized(nums) {
    let max = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(sum, max)
        if (sum <= 0) {
            sum = 0
        }
    }
    return max
}

//console.log(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(optimized([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// Pattern Learned:
// Kadane's Algorithm
// Running Sum
// If current sum becomes negative,
// starting fresh is better