// Weekly Test #1
// LeetCode 11 - Container With Most Water

// Time Limit: 30 mins

// Result:
// Couldn't solve fully independently within time
// Identified two pointer pattern independently
// Solved optimized approach after discussion/rethinking

// Self Evaluation: (By chatgpt)
// Logic Intuition: 7/10
// Pattern Recognition: 7.5/10
// Implementation: 4/10
// Panic Handling: 8/10
// Independent Thinking: 8/10

// Main Struggle:
// - Area calculation
// - Understanding width relation with indices
// - Initially focused too much on max heights

// Key Learning:
// Area depends on:
// width * minimum height
//
// width = right - left
// height = Math.min(height[left], height[right])

// --------------------------------------------------
// First Attempt
// --------------------------------------------------

function firstApproch(height) {
    let max = height[0]
    let secondMax = 0
    let a = 0
    let b = 0

    for (let i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i]
            a = i
        }

        if (height[i] < max && height[i] > secondMax) {
            secondMax = height[i]
            b = i
        }
    }

    return (b - a) * secondMax
}

// --------------------------------------------------
// Correct Optimized Approach (Took hints from chatgpt)
// TC: O(n)
// SC: O(1)
// Pattern: Two Pointers
// --------------------------------------------------

function correct(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right) {
        let w = right - left
        let h = Math.min(height[right], height[left])

        let area = w * h

        maxArea = Math.max(maxArea, area)

        if (height[right] < height[left]) {
            right--
        } else {
            left++
        }
    }

    return maxArea
}

console.log(correct([1, 8, 6, 2, 5, 4, 8, 3, 7]))