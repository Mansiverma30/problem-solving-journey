function revPolishNotation(tokens) {
    let stack = []
    for (const token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let right = stack.pop()
            let left = stack.pop()
            if (token === "+") {
                stack.push(left + right)
            } else if (token === "-") {
                stack.push(left - right)
            } else if (token === "*") {
                stack.push(left * right)
            } else {
                stack.push(Math.trunc(left / right))
            }
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0]
}

console.log(revPolishNotation(["2", "1", "+", "3", "*"]))