// Weekly Test #2
// LeetCode 739 - Daily Temperatures

// Time Limit: 30 mins

// Result:
// Solved brute force independently
// Derived monotonic stack approach through discussion/reasoning
// Implemented optimized solution mostly independently

// Self Evaluation: (By ChatGPT)
// Logic Intuition: 8.5/10
// Pattern Recognition: 8.5/10
// Implementation: 7.5/10
// Panic Handling: 9/10
// Independent Thinking: 9/10

// Main Struggle:
// - Understanding what information stack should store
// - Confusion between storing temperatures vs indices
// - Understanding whose answer gets updated in result array
// - Translating monotonic stack idea into code

// Key Learning:
// Store indices instead of values
//
// Stack stores indices whose answer is not found yet
//
// Current temperature can solve answers for multiple
// previous temperatures, therefore use while instead of if
//
// Answer belongs to popped index:
//
// res[topIdx] = currentIndex - topIdx
//
// Monotonic Stack Pattern:
// Keep unresolved temperatures in stack
// Pop while current temperature is warmer

// --------------------------------------------------
// Brute Force Solution
// --------------------------------------------------

function bruteForce(temp) {
    let res = new Array(temp.length).fill(0)

    for (let i = 0; i < temp.length; i++) {
        let nextIdx = i + 1

        while (nextIdx < temp.length) {
            if (temp[i] < temp[nextIdx]) {
                res[i] = nextIdx - i
                break
            }
            nextIdx++
        }
    }

    return res
}

// --------------------------------------------------
// Correct Optimized Approach
// TC: O(n)
// SC: O(n)
// Pattern: Monotonic Stack
// --------------------------------------------------

function optimized(temp) {
    let stack = []
    let res = new Array(temp.length).fill(0)

    for (let i = 0; i < temp.length; i++) {

        while (
            stack.length > 0 &&
            temp[i] > temp[stack[stack.length - 1]]
        ) {
            let topIdx = stack[stack.length - 1]

            res[topIdx] = i - topIdx

            stack.pop()
        }

        stack.push(i)
    }

    return res
}

console.log(
    optimized([73, 74, 75, 71, 69, 72, 76, 73])
)

// Pattern Learned:
// Monotonic Stack
// Store indices when distance matters
// Next Greater Element type problems
// Current element can solve multiple previous elements