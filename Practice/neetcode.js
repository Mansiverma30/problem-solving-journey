function fun(temperatures) {
    let stack = []
    let res = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let topIdx = stack[stack.length - 1]
            res[topIdx] = i - topIdx
            stack.pop()
        }
        stack.push(i)
    }
    return res
}


console.log(fun([30, 38, 30, 36, 35, 40, 28]))