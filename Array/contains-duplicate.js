// Problem: Contains Duplicate
// Input: nums = [1,2,3,1]
// Output: true

// Here I've to return true or false according to array, if array contains duplicate return true otherwise false

// Brute Force Solution
// Time complexity: O(n^2), Space Complexity: O(1)
// Here I used nested loops, and checked each pair, and if any pair matched I returned true otherwise it'll be false

function bruteForce(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}

// Optimized Solution
// Time complexity: O(n), Space Complexity: O(n)
// Here I stored previously seen elements in a hashmap and checked if it already exists or not
function optimized(nums) {
    let map = new Map()
    for (const n of nums) {
        if (map.has(n)) {
            return true
        } else map.set(n, true)
    }
    return false
}

console.log(bruteForce([1, 2, 3, 1]))
console.log(optimized([1, 2, 3, 1]))

// Pattern Learned:
// Use hashmap/set to track previously seen elements
// Fast existence lookup to avoid nested loops