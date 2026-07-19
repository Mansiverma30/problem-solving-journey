function fun(numbers, target) {
    let idx1 = 0
    let idx2 = numbers.length - 1
    while (idx1 < idx2) {
        console.log(idx1, idx2)
        if (numbers[idx1] + numbers[idx2] === target) {
            return [idx1 + 1, idx2 + 1]
        }
        else if (numbers[idx1] + numbers[idx2] < target) {
            idx1++
        }
        else {
            idx2--
        }
    }

}


console.log(fun([2, 3, 4], 6))