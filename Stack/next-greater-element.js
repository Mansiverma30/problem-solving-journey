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

function optimized(nums1, nums2) {
    let stack = []
    let res = new Array(nums1.length)
    for (let i = 0; i < nums2.length; i++) {

    }
    return res
}

console.log(optimized([4, 1, 2], [1, 3, 4, 2]))