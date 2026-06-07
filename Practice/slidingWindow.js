// Gonna Practice Sliding window loops so I can be comfortable with it.

// Problem 1
// Maximum Sum Subarray of Size K

let arr = [2, 1, 5, 1, 3, 2]
let k = 3
let sum = 0
for (let i = 0; i < k; i++) {
    sum += arr[i]
}
let maxSum = sum
for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k]
    maxSum = Math.max(maxSum, sum)
}
console.log(maxSum)