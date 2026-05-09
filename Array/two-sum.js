// Problem: Two Sum
// Input: arr = [0,7,1,9], target = 7
// Output: [0,1]

// Here I've to return the indices of the two numbers such that they add upto target, if nothing return [-1,-1]

// Brute Force Solution
// Time complexity: O(n^2), Space Complexity: O(1)
// Here I used nested loops, and checked each pair and returned the indices

function bruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
    return [-1, -1]
}

// Optimized Solution
// Time complexity: O(n), Space Complexity: O(n)
// Here I stored previously seen elements in a hashmap and checked if the required complement already existed

function optimized(arr, target) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let needed = target - arr[i]
        if (map.has(needed)) {
            let idx1 = map.get(needed)
            let idx2 = i
            return [idx1, idx2]
        } else map.set(arr[i], i)

    }
    return [-1, -1]
}

console.log(bruteForce([0, 7, 1, 9], 8))
console.log(optimized([0, 7, 1, 9], 10))

// Pattern Learned:
// Use hashmap to store previously seen values for fast lookup
// Complement pattern: target - currentElement