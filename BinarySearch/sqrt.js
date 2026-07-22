function sqrt(x) {
    let left = 0
    let right = x
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid * mid === x) {
            return mid
        } else if (mid * mid < x) {
            left = mid + 1
        } else if (mid * mid > x) {
            right = mid - 1
        }
    }
    return right
}

console.log(sqrt(4))
console.log(sqrt(8))
console.log(sqrt(9))
console.log(sqrt(14))