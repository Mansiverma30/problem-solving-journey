// Problem: Top K frequent elements
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Here I've to return the k most frequent elements from the given array.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(nums, k) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n logn), Space Complexity: O(n)

// Here I used hashmap to store frequencies. Then I converted map into array using entries(), sorted according to frequency, took first k elements using slice(), and returned only numbers using map().

function optimized(nums, k) {
    let map = new Map()

    for (const n of nums) {
        if (map.has(n)) {
            map.set(n, (map.get(n) || 0) + 1)
        } else map.set(n, 1)
    }
    let res = [...map.entries()].sort((a, b) => b[1] - a[1])

    return res.slice(0, k).map((n) => n[0])
}

//console.log(bruteForce([1,1,1,2,2,3], 2))
console.log(optimized([1, 1, 1, 2, 2, 3], 2))

// Pattern Learned:
// Frequency based questions usually need hashmap
// entries() converts map into array pairs
// slice() helps take required portion
// map() transforms array elements