function moveZero(nums) {
    let i = k = 0
    let j = nums.length - 1
    while (i <= j) {
        if (nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[k]
            nums[k] = temp
            i++
            k++
        }
        else i++
    }
    return nums
}

function swap(a, b) {
    let temp = a
    a = b
    b = temp
    return [a, b]
}

console.log(moveZero([0, 1, 0, 3, 12]))

//console.log(swap(1, 2))