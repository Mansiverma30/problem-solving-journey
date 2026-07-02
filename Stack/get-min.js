let main = []
let min = []

function push(x) {
    main.push(x)
    if (min.length === 0) {
        min.push(x)
    }
    else min.push(Math.min(x, min[min.length - 1]))
}

function pop() {
    main.pop()
    min.pop()
}

function top() {
    return main[main.length - 1]
}

function getMin() {
    return min[min.length - 1]
}

push(6)
push(2)
push(3)
push(1)
push(5)

console.log(top())
console.log(getMin())