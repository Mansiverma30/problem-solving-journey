function fun(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left !== s[right]]) {
            return false
        }
        left++
        right--
    }
    return true
}


console.log(fun("Was it a car or a cat I saw?"))