// Problem: Merge Sorted Array
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Here I've to merge nums2 into nums1 as one sorted array.

// Brute Force Solution
// Time Complexity: O((m+n) log(m+n)) Space Complexity: O(1)

// Here I filled the empty spaces of nums1 using nums2 and then sorted the whole array.

function bruteForce(nums1, m, nums2, n) {
    let j = 0

    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j]
        j++
    }

    return nums1.sort((a, b) => a - b)
}

// Optimized Solution
// Time Complexity: O(m + n) Space Complexity: O(1)

// Here I used three pointers.
// i -> last valid element of nums1
// j -> last element of nums2
// k -> last index of nums1

// I compared elements from the back and placed the bigger element
// at the end of nums1 to maintain sorted order.

function optimized(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = nums1.length - 1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }

        k--
    }

    return nums1
}

console.log(bruteForce([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(optimized([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

// Pattern Learned:
// Use two/three pointers for sorted arrays
// Fill array from the back to avoid overwriting values
// Use existing sorted order instead of sorting again