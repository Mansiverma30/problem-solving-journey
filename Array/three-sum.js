// Problem: Three Sum
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Here I've to return all unique triplets whose sum equals 0.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(nums) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n²), Space Complexity: O(1)

// Here I first sorted the array. Then fixed one element and used two pointers to find remaining two numbers whose sum becomes 0. Also skipped duplicates to avoid repeated triplets.

function optimized(nums) {
    nums = nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) continue
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (left < right && nums[left] === nums[left - 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            }
        }
    }
    return res
}

//console.log(bruteForce([-1, 0, 1, 2, -1, -4]))
console.log(optimized([-1, 0, 1, 2, -1, -4]))

// Pattern Learned:
// Sorting + Two Pointers
// Fixed element approach
// Duplicate handling
// Optimized triplet searching