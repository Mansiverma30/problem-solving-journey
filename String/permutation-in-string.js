// Problem: Permutation in String
// Input: s1 = "ab" s2 = "eidbaooo"
// Output: true

// Here I've to return

// Brute Force Solution
// Time complexity: O(), Space Complexity: O()
// Here I

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

// Optimized Solution
// Time complexity: O(), Space Complexity: O()
// Here I

function optimized(s1, s2) {
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

console.log(bruteForce("ab", "eidbaooo"))
console.log(optimized("ab", "eidbaooo"))

// Pattern Learned:
