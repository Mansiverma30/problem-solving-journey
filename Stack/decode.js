function decode(s) {
    let stack = []
    let currentString = ''
    let currentNumber = 0
    for (const c of s) {
        if (c >= "0" && c <= "9") {
            currentNumber = Number(c)
        }
        else if (c === "[") {
            stack.push(currentString)
            stack.push(currentNumber)
        }
        else if (c === "]") {
            stack.pop()
            stack.push(currentString.repeat(currentNumber))
        }
        else {
            currentString += c
        }
    }
    console.log(currentString)
}

decode("3[a]")