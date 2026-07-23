function fun(nums) {
    let ans = [...nums]
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i])
    }
    return ans
}


console.log(fun([1, 2, 3, 4]))