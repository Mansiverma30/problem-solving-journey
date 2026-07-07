function removeDuplicates(s) {
    let stack = []
    for (const c of s) {
        if (stack[stack.length - 1] === c) {
            stack.pop()
        }
        else stack.push(c)
    }
    console.log(stack.join(''))
}

removeDuplicates("azxxzy")