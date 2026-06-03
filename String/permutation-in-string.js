// Problem: Permutation in String
// Input: s1 = "ab" s2 = "eidbaooo"
// Output: true

// Here I've to return true if any permutation of s1 exists as a substring in s2, otherwise return false.

// Brute Force Solution
// Time Complexity: O((n-k+1) * k log k) Space Complexity: O(k)
// Here I generate every possible substring of size k, sort both strings and compare them.

function bruteForce(s1, s2) {
    let k = s1.length
    let sortedS1 = s1.split('').sort().join('')
    for (let i = 0; i <= s2.length - k; i++) {
        let s = s2.slice(i, k + i)
        if (sortedS1 === s.split('').sort().join('')) {
            return true
        }
    }
    return false
}

// Better Solution
// Time Complexity: O((n-k+1) * k) Space Complexity: O(k)
// Here I use frequency maps instead of sorting.
// For every window of size k:
// 1. Build a frequency map of the current window.
// 2. Compare it with the frequency map of s1.
// If frequencies match, return true.

function better(s1, s2) {
    let map = new Map()
    let k = s1.length

    for (const c of s1) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    for (let i = 0; i <= s2.length - k; i++) {
        let s = s2.slice(i, i + k)

        let map2 = new Map()

        for (const c of s) {
            map2.set(c, (map2.get(c) || 0) + 1)
        }

        let isMatch = true

        if (map.size !== map2.size) {
            isMatch = false
        } else {
            for (const [key, value] of map) {
                if (map2.get(key) !== value) {
                    isMatch = false
                    break
                }
            }
        }

        if (isMatch) {
            return true
        }
    }

    return false
}

// Optimized Solution
// Time complexity: O(), Space Complexity: O()
// Here I:
// 1. Create a frequency map of s1.
// 2. Create a frequency map of the first window.
// 3. Check if the first window matches.
// 4. Slide the window:
//      - Remove the left character.
//      - Add the right character.
//      - Delete keys whose frequency becomes 0.
// 5. Compare the updated window map with targetMap.
// 6. Return true if frequencies match, otherwise continue.

function optimized(s1, s2) {
    let map = new Map()
    let targetMap = new Map()
    let k = s1.length
    let left = 0
    for (const c of s1) {
        targetMap.set(c, (targetMap.get(c) || 0) + 1)
    }
    for (let i = 0; i < k; i++) {
        map.set(s2[i], (map.get(s2[i]) || 0) + 1)

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
        return true
    }
    for (let right = k; right < s2.length; right++) {

        map.set(s2[left], (map.get(s2[left])) - 1)
        if (map.get(s2[left]) === 0) {
            map.delete(s2[left])
        }
        map.set(s2[right], (map.get(s2[right]) || 0) + 1)
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
            return true
        }
    }
    return false
}

console.log(bruteForce("ab", "eidbaooo"))
console.log(better("ab", "eidbaooo"))
console.log(optimized("ab", "eidbaooo"))

// Pattern Learned: Sliding Window + Frequency Map

/*
Key Observations:

1. Fixed Window Size
    Window size is always equal to s1.length.

2. First Window
    Build the first window separately before sliding.

3. Window Movement
    When window moves:
        - One character leaves.
        - One character enters.
        Example:
          abc -> bcd
          a leaves, d enters.

4. Frequency Maps
    Instead of sorting every window,
    store character frequencies in a map.

5. Clean Frequency Map
    If frequency becomes 0,
    remove the key from the map.

6. Edge Case
    Always check the first window before sliding.
*/

// Biggest Learning:

// I don't need to rebuild the entire frequency map for every window.
// I can update the existing map by removing the outgoing character
// and adding the incoming character.
