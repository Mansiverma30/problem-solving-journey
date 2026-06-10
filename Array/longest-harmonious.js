// Problem: Longest Harmonious Subsequence
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Here I've to find the length of the longest harmonious subsequence.

// A harmonious subsequence is one where:
// max value - min value = 1
// Since it's a subsequence, I can skip elements but must maintain their order.

// Optimized Solution (Hash Map / Frequency Map)
// Time Complexity: O(n) Space Complexity: O(n)
//
// Here I:
// 1. Count the frequency of every number.
// 2. For every unique number x, check if x + 1 exists.
// 3. If it exists, then a harmonious subsequence can be formed.
// 4. Length of that subsequence will be:
//    frequency(x) + frequency(x + 1)
// 5. Keep track of the maximum length.

function optimized(nums) {
    let map = new Map()
    // Count frequency of every number
    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    let max = 0
    // Check every unique number
    for (const [k, v] of map) {
        let x = k
        // If x + 1 exists,
        // then max - min = 1
        if (map.has(x + 1)) {
            max = Math.max(max, map.get(x + 1) + map.get(x))
        }
    }
    return max
}

console.log(optimized([1, 3, 2, 2, 5, 2, 3, 7]))

// Pattern Learned:
// 1. Hash Map
// 2. Frequency Counting

// Key Observations:
// 1. The condition:
//    max - min = 1
//    means we only care about two consecutive numbers.

// Example:
// 2 and 3
// 7 and 8
// 100 and 101
// 2. We do NOT care about:
//    frequency difference
//    We care about:
//    number difference
// 3. If x and x + 1 exist,
//    then the harmonious subsequence length is:
//    frequency(x) + frequency(x + 1)

// Example:
// nums = [1,3,2,2,5,2,3,7]
// Frequency Map:
// 1 -> 1
// 2 -> 3
// 3 -> 2
// 5 -> 1
// 7 -> 1
// For:
// 2 and 3
// Length:
// 3 + 2 = 5
// Answer = 5

// Biggest Learning:
// Sometimes the hardest part is not writing the code.
// It's understanding what the problem is actually asking.