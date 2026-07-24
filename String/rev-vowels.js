function revVowels(s) {
    let i = 0
    let j = s.length - 1
    let arr = s.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    while (i < j) {
        if (!vowels.includes(arr[i])) {
            i++
        } else if (!vowels.includes(arr[j])) {
            j--
        }
        else {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    return arr.join('')
}

console.log(revVowels("IceCreAm"))