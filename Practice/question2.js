function fun(s) {
    if (s.length === 1) {
        return -1
    }

    let map = new Map()

    for (const c of s) {
        if (map.has(c)) {
            return c
        }
        map.set(c, 0)
    }



    return -1


}

console.log(fun("abca"))