let stack1 = []
let stack2 = []

function push(x) {
    stack1.push(x)
}

function pop() {
    if (stack2.length === 0) {
        while (stack1.length !== 0) {

            let x = stack1.pop()
            stack2.push(x)
        }
    }
    return stack2.pop()
}

function peek() {
    if (stack2.length === 0) {
        while (stack1.length !== 0) {

            let x = stack1.pop()
            stack2.push(x)
        }
    }
    return stack2[stack2.length - 1]
}

function empty() {
    return stack1.length === 0 && stack2.length === 0
}

