function isPerfectSquare(num) {
    let left = 0
    let right = num
    if (num === 1) return true
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid * mid === num) {
            return true
        } else if (mid * mid < num) {
            left = mid + 1
        } else right = mid
    }
    return false
}

console.log(isPerfectSquare(1))