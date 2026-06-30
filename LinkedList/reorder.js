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

function middleofLinkedList(head) {
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function reverseLinkedList(head) {
    let current = head
    let prev = null
    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

function reorder(head) {
    let current = head
    let middle = middleofLinkedList(head)
    let revMiddle = reverseLinkedList(middle)
    if (head.next === null) return head
    let currentNext = head
    let revNext = revMiddle
    while (revNext !== null) {
        currentNext = current.next
        current.next = revMiddle
        revNext = revMiddle.next
        revMiddle.next = currentNext
        currentNext.next = revNext
        current = currentNext
        revMiddle = revNext
    }

    console.log(head)
}

reorder(node1)

/*
1 -> 2 -> 3 -> 4 -> 5

1 -> 4 -> 2 -> 5 -> 3

current: 1 -> 2 -> 3
middle: 3 -> null
revMiddle: 5 -> 4 -> 3

*/