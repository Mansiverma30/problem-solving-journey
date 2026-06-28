class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function nthFromEnd(head, index) {
    let fast = head
    let slow = head
    for (let i = 0; i < index; i++) {
        fast = fast.next
    }
    while (fast !== null) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}

function rotateList(head, k) {
    let current = head
    let length = 0
    let tail = head
    if (head === null || head.next === null) return head
    while (current !== null) {
        length++
        tail = current
        current = current.next
    }
    k = k % length
    if (k === 0) return head
    let newTail = nthFromEnd(head, k + 1)
    let newHead = nthFromEnd(head, k)
    tail.next = head
    newTail.next = null

    return newHead
}

console.log(rotateList(node1, 2))

/*
1 -> 2 -> 3 -> 4 -> 5
|___________________|

*/