function longest(strs) {
    let map = new Map()
    let left = 0
    let windowSize = 0
    for (let right = 0; right < strs.length; right++) {
        map.set(strs[right], (map.get(strs[right]) || 0) + 1)

        while (map.get(strs[right]) > 1) {
            map.set(strs[left], (map.get(strs[left])) - 1)
            left++
        }
        windowSize = Math.max(windowSize, right - left + 1)
    }
    return windowSize

}

console.log(longest("abcabcbb"))