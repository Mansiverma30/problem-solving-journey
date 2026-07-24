function strStr(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break
            }
        }
        if (j === needle.length) {
            return i
        }
    }
    return -1
}

console.log(strStr("sadbutsad", "sad"))