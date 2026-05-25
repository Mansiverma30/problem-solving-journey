// Problem: Two Sum II
// Input: arr = [2,7,11,15], target = 9
// Output: [1,2]

// Here I've to return indices (1-indexed) of two numbers whose sum equals target.

// --------------------------------------------------
// Brute Force Solution
// Time Complexity: O(n²), Space Complexity: O(1)

// Here I checked every possible pair using nested loops.
// Easy peasy but not optimized hehe 😏
// --------------------------------------------------

function bruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }

    return [-1, -1]
}

// --------------------------------------------------
// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(1)

// Here I used Two Pointers because array is sorted.
// If sum is small -> move left pointer.
// If sum is large -> move right pointer.
// Sorted arrays and two pointers are besties 😭🔥
// --------------------------------------------------

function optimized(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum < target) {
            left++
        } else if (sum > target) {
            right--
        } else {
            return [left + 1, right + 1]
        }
    }

    return [-1, -1]
}

// --------------------------------------------------
// Test Cases
// --------------------------------------------------

console.log(bruteForce([2, 7, 11, 15], 9))
console.log(optimized([2, 7, 11, 15], 9))
console.log(optimized([-3, -1, 0, 2, 4], 1))
console.log(optimized([1, 2, 3, 4, 4, 9], 8))
console.log(optimized([1, 2], 3))

// --------------------------------------------------
// Funny Bug I Did 😭🔥
//
// I wrote the whole optimized solution correctly
// but instead of comparing with target,
// I was comparing with 9 directly 😭
//
// Then I spent 5 mins debugging,
// questioning my entire existence,
// only to realize I hardcoded the sample value 💅
// --------------------------------------------------

// Pattern Learned:
// Two Pointers
// Sorted arrays can remove nested loops 😏