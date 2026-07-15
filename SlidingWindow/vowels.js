function vowelsBrute(s, k) {
    let max = 0
    for (let i = 0; i < s.length - k + 1; i++) {
        let count = 0

        for (let j = i; j < i + k; j++) {
            const vowel = "aeiou"
            if (vowel.includes(s[j])) {
                count++
            }

        }
        max = Math.max(count, max)
    }
    return max
}

function vowelsOptimize(s, k) {
    let count = 0
    let max = 0
    const vowel = "aeiou"
    for (let i = 0; i < k; i++) {
        if (vowel.includes(s[i])) {
            count++
        }
    }
    max = count
    for (let i = k; i < s.length; i++) {
        if (vowel.includes(s[i - k])) {
            count--
        }
        if (vowel.includes(s[i])) {
            count++
        }
        max = Math.max(max, count)
    }
    return max
}

console.log(vowelsBrute("abciiidef", 3))
console.log(vowelsOptimize("abciiidef", 3))