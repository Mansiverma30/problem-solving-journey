// Problem: Product of Array Except Self
// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Here I've to return an array where each index contains product of all elements except itself.

// Better Solution
// Time Complexity: O(n), Space Complexity: O(n)

// Here I used left and right product arrays. left stores prefix products, right stores suffix products, then multiplied both arrays to get answer.

function bruteForce(nums) {
    let left = []
    let right = []
    let answer = []
    left[0] = 1
    right[nums.length - 1] = 1

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i]
    }

    return answer
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(1)

// Here I stored left products directly in answer array. Then traversed from right side using one variable, rightProduct to achieve O(1) extra space.

function optimized(nums) {
    let rightProduct = 1
    let answer = []
    answer[0] = 1

    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return answer
}

console.log(bruteForce([1, 2, 3, 4]))
console.log(optimized([1, 2, 3, 4]))

// Pattern Learned:
// Prefix and suffix products
// Space optimization
// Reusing output array
// Traversing from both directions