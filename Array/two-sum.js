// Problem: Two Sum

// Brute Force
// Time: n^2, Space: 1

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

// Optimized

function optimized(arr, target) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let needed = Math.abs(arr[i] - target)
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