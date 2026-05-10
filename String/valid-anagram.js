// Problem: Valid Anagram
// Input: s = "anagram", t = "nagaram"
// Output: true

// Here I've to return true or false according to the strings. If both strings contain the same characters with the same frequency, return true otherwise false.

// Brute Force Solution
// Time Complexity: O(n log n), Space Complexity: O(n)
// Here I sorted both strings and checked if they became equal or not.

function bruteForce(s, t) {
    if (s.split('').sort().join('') === t.split('').sort().join('')) {
        return true
    }
    return false
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(n)
// Here I stored the frequency of characters from the first string in a hashmap. Then I traversed the second string and reduced the frequency count. If any character did not exist or its frequency became 0, I returned false.

function optimized(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let map = new Map()

    for (const c1 of s) {
        map.set(c1, (map.get(c1) || 0) + 1)
    }

    for (const c2 of t) {
        if (!map.has(c2) || map.get(c2) === 0) {
            return false
        }

        map.set(c2, map.get(c2) - 1)
    }

    return true


}

console.log(bruteForce("cat", "tac"))
console.log(optimized("anagram", "nagaram"))

// Pattern Learned:
// Use hashmap/frequency count to track characters
// Compare character frequencies efficiently
// Frequency counting pattern in strings
