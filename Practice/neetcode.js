function fun(nums) {
    let maxCount = 0
    let set = new Set(nums)
    for (const n of set) {
        if (!set.has(n - 1)) {
            let currentNum = n
            let count = 1
            while (set.has(currentNum + 1)) {
                count++
                currentNum++
            }
            maxCount = Math.max(maxCount, count)
        }
    }
    return maxCount
}


console.log(fun([0, 3, 2, 5, 4, 6, 1, 1]))