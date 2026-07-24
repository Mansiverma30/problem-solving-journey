function mergeAlternately(s, t) {
    let i = 0
    let j = 0
    let ans = []
    while (i < s.length) {
        ans.push(s[i])
        ans.push(t[j])
        i++
        j++
    }
    if (j !== t.length) {
        let k = t.slice(j, t.length)
        ans.push(k)
    }
    return ans.join('')
}

console.log(mergeAlternately('ab', 'abbxxc'))