function dailyTemp(temperatures) {
    let stack = []
    let res = Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let top = stack[stack.length - 1]
            res[top] = i - top
            stack.pop()
        }
        stack.push(i)
    }
    return res
}

console.log(dailyTemp([73, 74, 75, 71, 69, 72, 76, 73]))