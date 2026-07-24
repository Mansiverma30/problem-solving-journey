function plusOne(digits) {
    if (digits[digits.length - 1] < 9) digits[digits.length - 1]++
    else {
        let i = digits.length - 1
        while (digits[i] === 9) {
            digits[i] = 0
            i--
        }
        if (i === -1) digits.unshift(1)
        else digits[i]++
    }
    return digits
}

console.log(plusOne([5]))