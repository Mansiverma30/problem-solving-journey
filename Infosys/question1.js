function fun(arr) {
    if (arr.length === 1) {
        return 0
    }

    let map = new Map()

    for (const a of arr) {
        map.set(a, (map.get(a) || 0) + 1)
    }
    let distinctCount = map.size
    for (const val of map.values()) {

        if (val > 1) {
            return distinctCount
        }
    }
    return distinctCount - 1



}

console.log(fun([1, 2, 2, 3, 3, 3]))