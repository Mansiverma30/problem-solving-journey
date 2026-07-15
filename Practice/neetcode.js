function fun(nums) {
    let rightProduct = 1
    let answer = []
    answer[0] = 1

    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
        console.log(answer)
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct
        rightProduct *= nums[i]
        console.log(rightProduct)
    }
    return answer

}

console.log(fun([1, 2, 4, 6]))