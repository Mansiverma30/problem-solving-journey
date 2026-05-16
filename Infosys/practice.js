// Frequency Map
let arr = [1, 2, 2, 3, 3, 3]
let map = new Map()
for (const a of arr) {
    if (map.has(a)) {
        map.set(a, (map.get(a) || 0) + 1)
    } else map.set(a, 1)
}
//console.log(map)

// Character Frequency
let s = "mississippi"
let map2 = new Map()
for (const c of s) {
    if (map2.has(c)) {
        map2.set(c, (map2.get(c) || 0) + 1)
    } else map2.set(c, 1);
}
//console.log(map2)

// Sorting

let arr2 = [5, 1, 9, 2]
//console.log(arr2.sort(((a, b) => a - b)))
//console.log(arr2.sort(((a, b) => b - a)))

// Stack
let arr3 = []
arr3.push(1)
arr3.push(2)
arr3.pop()
//console.log(arr3[arr3.length - 1])

// Queue
let arr4 = []
arr4.push(10)
arr4.push(20)
arr4.shift()

// Set
let arr5 = [1, 1, 2, 2, 3]
let set = new Set(arr5)
//console.log(set)

// Prefix sum
let arr6 = [1, 2, 3, 4]
let i = 0
let j = 1
while (j <= arr6.length - 1) {
    arr6[j] = arr6[i] + arr6[j]
    i++
    j++
}
//console.log(arr6)

// Sliding Window
let arr7 = [1, 2, 3, 4, 5]
k = 3
let windowSum = 0
for (let i = 0; i < k; i++) {
    windowSum += arr7[i]
}
let maxSum = windowSum
for (let i = k; i < arr7.length; i++) {
    windowSum = windowSum + arr7[i] - arr7[i - k]
    maxSum = Math.max(maxSum, windowSum)
}
console.log(maxSum)