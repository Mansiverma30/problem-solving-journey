// Problem: Next Greater Element I
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
//
// Here I've to find the next greater element for each element in nums1. The next greater element is the first greater number that appears to the right of that element in nums2. If no greater element exists, return -1 for that element.

// Brute Force Solution
// Time Complexity: O(n * m²) Space Complexity: O(n)

// Here I:
// 1. Find each element of nums1 inside nums2.
// 2. Search towards the right until I find a greater element.
// 3. If a greater element is found, store it.
// 4. Otherwise store -1.

function bruteForce(nums1, nums2) {
    let res = []

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {

            if (nums1[i] === nums2[j]) {

                let k = j + 1
                let nextGreater = -1

                while (k < nums2.length) {

                    if (nums1[i] < nums2[k]) {
                        nextGreater = nums2[k]
                        break
                    }

                    k++
                }

                res.push(nextGreater)
            }
        }
    }

    return res
}

// Optimized Solution (Monotonic Stack)
// Time Complexity: O(n + m) Space Complexity: O(n + m)

// Here I:
// 1. Traverse nums2 and maintain a monotonic decreasing stack.
// 2. The stack stores elements whose next greater element has not been found yet.
// 3. When a greater element is found, resolve all smaller elements from the stack and store their relationship in a Map.
// 4. Remaining elements in the stack do not have a next greater element, so store -1 for them.
// 5. Traverse nums1 and use the Map to build the answer.

function optimized(nums1, nums2) {
    let stack = []
    let map = new Map()
    let res = []

    for (let i = 0; i < nums2.length; i++) {

        while (
            stack.length > 0 &&
            nums2[i] > stack[stack.length - 1]
        ) {
            let top = stack.pop()
            map.set(top, nums2[i])
        }

        stack.push(nums2[i])
    }

    while (stack.length > 0) {
        map.set(stack[stack.length - 1], -1)
        stack.pop()
    }

    for (const n of nums1) {
        if (map.has(n)) {
            res.push(map.get(n))
        }
    }

    return res
}

console.log(bruteForce([4, 1, 2], [1, 3, 4, 2]))
console.log(optimized([4, 1, 2], [1, 3, 4, 2]))

// Pattern Learned:
// 1. Monotonic Decreasing Stack
// 2. Next Greater Element Pattern
// 3. Using Stack to store unresolved elements
// 4. Using Map for precomputed lookups

// Key Observations:

// 1. Brute Force repeatedly scans the right side of nums2, resulting in a high time complexity.

// 2. Instead of searching multiple times, we can process nums2 once and precompute all next greater elements.

// 3. Stack stores elements whose next greater element has not been found yet.

// 4. When a larger element arrives, it resolves all smaller elements on the top of the stack.

// Example:

// nums2 = [2,1,3]

// Stack:
// [2]
// [2,1]

// 3 arrives:

// 1 -> 3
// 2 -> 3

// Store:
// map.set(1,3)
// map.set(2,3)

// 5. Any element left in the stack after traversal does not have a next greater element.

// Biggest Learning:

// The stack does not store answers. It stores unresolved elements waiting for their next greater element.