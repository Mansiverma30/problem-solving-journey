function fun(s, k) {
    let count = 0
    for (let i = 0; i < k; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            count++
        }
    }
    let max = count
    for (let i = k; i < s.length; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            count++
        }
        if (s[i - k] == "a" || s[i - k] == "e" || s[i - k] == "i" || s[i - k] == "o" || s[i - k] == "u") {
            count--
        }
        max = Math.max(max, count)
    }
    return max
}

console.log(fun("abciiidef", 3))
