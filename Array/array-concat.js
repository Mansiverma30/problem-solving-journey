function conCat(nums) {
    let n = nums.length
    let ans = new Array(2 * n)
    for (let i = 0; i < n; i++) {
        ans[i] = ans[i + n] = nums[i]
    }
    return ans
}

console.log(conCat([1, 2, 1]))