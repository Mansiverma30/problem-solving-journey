function compress(chars) {
    let read = 0
    let write = 0
    let count = 0
    while (read < chars.length) {
        count++
        if (chars[read] !== chars[read + 1]) {
            chars[write] = chars[read]
            write++
            if (count > 1) {
                let str = count.toString()
                for (const digit of str) {
                    chars[write] = digit
                    write++
                }
            }
            count = 0
        }
        read++
    }
    return write
}

console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))