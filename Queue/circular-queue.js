let size = 5
let queue = new Array(size).fill(null)
let front = 0
let rear = 0
let count = 0

function enqueue(x) {
    if (size === count) {
        console.log("Full")
        return;
    }
    queue[rear] = x
    rear = (rear + 1) % size
    count++
}

function dequeue() {
    if (count === 0) {
        console.log("empty")
        return
    }
    let value = queue[front]
    queue[front] = null
    front = (front + 1) % size
    count--
    console.log(value)
}

function isFull() {
    return count === size
}

function isEmpty() {
    return count === 0
}

enqueue(4)
enqueue(2)
enqueue(7)
enqueue(5)
enqueue(5)
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()
enqueue(1)
console.log(front, rear)
console.log(queue)