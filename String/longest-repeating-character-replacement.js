// Problem: Longest Repeating Character Replacement
// Input: s = "AABABBA" k = 1
// Output: 4

// Here I've to return the length of longest substring
// that can contain same repeating characters
// after replacing at most k characters.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(s, k) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(1)

// Here I used sliding window + hashmap.
// right pointer expands the window
// and left pointer shrinks the window
// whenever replacements needed become greater than k.

function optimized(s, k) {
    let left = 0
    let windowSize = 0
    let map = new Map()

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        const maxFreq = Math.max(...map.values());
        while (((right - left + 1) - maxFreq) > k) {
            map.set(s[left], map.get(s[left]) - 1)
            left++
        }

        windowSize = Math.max(windowSize, right - left + 1)
    }

    return windowSize
}

//console.log(bruteForce("abcabcbb"))
console.log(optimized("AABABBA", 1))

// Pattern Learned:
// Use sliding window to maintain valid window
// Hashmap helps track character frequencies
// Validity depends on replacement condition
// Shrink window when invalid