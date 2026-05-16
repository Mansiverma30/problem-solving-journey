// Problem: Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3

// Here I've to return the length of the longest substring without repeating characters.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(strs) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(n)

// Here I used sliding window + hashmap. Right pointer expands the window, and left pointer shrinks it whenever duplicate characters appear.

function optimized(s) {
    let left = 0
    let windowSize = 0
    let map = new Map()

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1)

        while (map.get(s[right]) > 1) {
            map.set(s[left], map.get(s[left]) - 1)
            left++
        }

        windowSize = Math.max(windowSize, right - left + 1)
    }

    return windowSize
}

//console.log(bruteForce("abcabcbb"))
console.log(optimized("abcabcbb"))

// Pattern Learned:
// Use sliding window to maintain valid substring
// Expand window using right pointer
// Shrink window using left pointer when condition breaks
// Hashmap helps track character frequency