// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

function fun(height) {
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let w = right - left
        let h = Math.min(height[right], height[left])
    }
}

console.log(fun([1, 8, 6, 2, 5, 4, 8, 3, 7]))

