function median(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    let totalLength = nums1.length + nums2.length
    let left = 0
    let right = nums1.length
    let half = Math.floor((totalLength + 1) / 2)
    while (left <= right) {
        let i = Math.floor((left + right) / 2)
        let j = half - i
        let leftA = i === 0 ? -Infinity : nums1[i - 1]
        let rightA = i === nums1.length ? Infinity : nums1[i]
        let leftB = j === 0 ? -Infinity : nums2[j - 1]
        let rightB = j === nums2.length ? Infinity : nums2[j]
        if (leftA <= rightB && leftB <= rightA) {
            if (totalLength % 2 === 1) {
                return Math.max(leftA, leftB)
            }
            else {
                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
            }
        }
        else if (leftA > rightB) {
            right = i - 1
        }
        else {
            left = i + 1
        }
    }
}


console.log(median([1, 3], [2, 4]))

/*
Algorithm
Median(nums1, nums2)
While left <= right

    Else if leftA > rightB
        Move cut1 to the left
        right = cut1 - 1

    Else
        Move cut1 to the right
        left = cut1 + 1

*/