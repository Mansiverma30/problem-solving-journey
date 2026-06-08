// Problem: Find All Anagrams in a String
// Input: s = "cbaebabacd" p = "abc"
// Output: [0,6]

// Here I've to return all starting indices of substrings in s that are anagrams of p. An anagram contains the same characters with the same frequencies.

// Brute Force Solution
// Time Complexity: O(n * k log k) Space Complexity: O(k)

// Here I:
// 1. Sort p once.
// 2. Generate every substring of length p.length.
// 3. Sort each substring.
// 4. Compare with sorted p.
// 5. If they match, store the starting index.

function bruteForce(s, p) {
    let k = p.length
    let sortedP = p.split('').sort().join('')
    let res = []
    for (let right = 0; right <= s.length - k; right++) {
        let c = s.slice(right, right + k)
        if (sortedP === c.split('').sort().join('')) {
            res.push(right)
        }
    }
    return res
}

// Optimized Solution (Fixed Sliding Window + Frequency Map)
// Time Complexity: O(n * m), m = unique characters in p Space Complexity: O(m)

// Here I:
// 1. Build a frequency map for p.
// 2. Create a frequency map for the first window.
// 3. Compare both maps.
// 4. Slide the window:
//      Remove left character.
//      Add right character.
// 5. Compare maps again.
// 6. If frequencies match, store the starting index.

function optimized(s, p) {
    let k = p.length
    let targetMap = new Map()
    let left = 0
    let map = new Map()
    let res = []
    for (const c of p) {
        targetMap.set(c, (targetMap.get(c) || 0) + 1)
    }
    for (let i = 0; i < k; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let isMatch = true
    if (targetMap.size !== map.size) {
        isMatch = false
    } else {
        for (const [key, value] of targetMap) {
            if (map.get(key) !== value) {
                isMatch = false
                break
            }
        }
    }

    if (isMatch) {
        res.push(left)
    }
    for (let right = k; right < s.length; right++) {
        map.set(s[left], map.get(s[left]) - 1)
        if (map.get(s[left]) === 0) {
            map.delete(s[left])
        }
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        left++
        let isMatch = true
        if (targetMap.size !== map.size) {
            isMatch = false
        } else {
            for (const [key, value] of targetMap) {
                if (map.get(key) !== value) {
                    isMatch = false
                    break
                }
            }
        }

        if (isMatch) {
            res.push(left)
        }
    }
    return res
}

console.log(bruteForce("cbaebabacd", "abc"))
console.log(optimized("cbaebabacd", "abc"))

// Pattern Learned:
// Fixed Sliding Window
// Frequency Maps
// Anagram Matching

// Key Observation:
// This problem is almost identical to:
// Permutation in String
// Difference:
// Permutation in String:
// Return true/false
// Find All Anagrams:
// Store all valid starting indices.