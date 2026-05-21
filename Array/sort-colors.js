// Problem: Sort Colors
// Input: strs = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Here I've to return the sorted array containing only 0s, 1s and 2s.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(nums) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(1)

// Here I used Dutch National Flag Algorithm. low handles position for 0s, high handles position for 2s, and mid traverses the array.

function optimized(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1

    while (mid <= high) {
        if (nums[mid] == 2) {
            let temp = nums[mid]
            nums[mid] = nums[high]
            nums[high] = temp
            high--
        } else if (nums[mid] == 0) {
            let temp = nums[low]
            nums[low] = nums[mid]
            nums[mid] = temp
            mid++
            low++
        } else {
            mid++
        }
    }

    return nums
}

//console.log(bruteForce([2, 0, 2, 1, 1, 0]))
console.log(optimized([2, 0, 2, 1, 1, 0]))

// Pattern Learned:
// Three pointer approach
// In-place sorting
// Dutch National Flag Algorithm
// Pointer movement after swapping