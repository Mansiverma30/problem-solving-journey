// Problem: Group Anagram
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [ ["eat","tea","ate"], ["tan","nat"], ["bat"] ]

// Here I've to return the group of anagram (that's it, if more refer leetcode 😔🙏)

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(strs) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n * k log k), Space Complexity: O(n * k)

// Here I used hashmap + sorted string as key. If two strings are anagrams, their sorted form will be same. I grouped all strings having same sorted key together.

function optimized(strs) {
    let map = new Map()

    for (const s of strs) {
        let c = s.split('').sort().join('')
        if (map.has(c)) {
            map.get(c).push(s)
        } else map.set(c, [s])
    }

    return [...map.values()]
}

//console.log(bruteForce(["eat","tea","tan","ate","nat","bat"]))
console.log(optimized(["eat", "tea", "tan", "ate", "nat", "bat"]))

// Pattern Learned:
// Use hashmap for grouping similar patterns
// Sorted string can act as unique identifier for anagrams
// Hashmap values can store arrays/groups