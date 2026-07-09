function decode(s) {
    let stack = []
    let currentString = ''
    let currentNumber = 0
    for (const c of s) {
        if (c >= "0" && c <= "9") {
            currentNumber = currentNumber * 10 + Number(c)
        }
        else if (c === "[") {
            stack.push(currentString)
            stack.push(currentNumber)
            currentNumber = 0
            currentString = ""
        }
        else if (c === "]") {
            let repeat = stack.pop()
            let prevString = stack.pop()
            currentString = prevString + currentString.repeat(repeat)
        }
        else {
            currentString += c
        }
    }
    console.log(currentString)
}

decode("3[a]")          // "aaa"
decode("3[a2[c]]")      // "accaccacc"
decode("2[abc]3[cd]ef") // "abcabccdcdcdef"
decode("10[a]")         // "aaaaaaaaaa"