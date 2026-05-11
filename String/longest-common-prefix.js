// Problem: Longest Common Prefix
// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"

// Here I've to return the longest common prefix among all strings. If there is no common prefix, return an empty string.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(strs) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n * m), Space Complexity: O(1)

// Here I first found the minimum length string because the common prefix cannot be longer than the smallest string. Then I compared characters index-by-index across all strings. If a mismatch occurred, I immediately returned the prefix built so far.

function optimized(strs) {
    let min = strs[0].length

    for (const e of strs) {
        min = Math.min(e.length, min)
    }

    let prefix = ""

    for (let i = 0; i < min; i++) {
        let chars = strs[0][i]

        for (const word of strs) {
            if (word[i] !== chars) {
                return prefix
            }
        }

        prefix += chars
    }

    return prefix
}

console.log(bruteForce(["flower", "flow", "flight"]))
console.log(optimized(["flower", "flow", "flight"]))

// Pattern Learned:
// Compare strings character-by-character
// Use smallest string length as constraint
// Stop immediately on mismatch