// Problem: Longest Consecutive Sequence
// Input: arr = [100,4,200,1,3,2]
// Output: 4

// Here I've to return the length of the longest consecutive sequence present in the array

// Brute Force Solution
// Time complexity: O(n logn), Space Complexity: O(1)

// Here I sorted the array first so consecutive elements come together, then tracked the longest streak while handling duplicates separately
// For this, brute force was even tough for me this time

function bruteForce(arr) {
    arr = arr.sort((a, b) => a - b)
    let maxCount = 1
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i]) {
            continue
        }
        if (arr[i + 1] - arr[i] !== 1) {
            count = 1
        } else {
            count++
            maxCount = Math.max(count, maxCount)
        }
    }
    return maxCount
}

// Optimized Solution
// Time complexity: O(), Space Complexity: O()

// Here I used Set for O(1) lookup. I only started counting from numbers whose previous consecutive element did not exist, because those numbers are the starting points of consecutive sequences
// Took help from chatgpt, ask to guide me step by step as I was struggling with this question so much

function optimized(arr) {
    let set = new Set(arr)
    let maxCount = 0
    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num
            let currentCount = 1
            while (set.has(currentNum + 1)) {
                currentNum++
                currentCount++
            }
            maxCount = Math.max(maxCount, currentCount)
        }
    }
    return maxCount
}

console.log(bruteForce([100, 4, 200, 1, 3, 2]))
console.log(optimized([100, 4, 200, 1, 3, 2]))

// Pattern Learned:
// Use Set for fast lookup
// Only start counting from actual sequence starters
// Optimized solutions are often based on observations

// Great experience with this question