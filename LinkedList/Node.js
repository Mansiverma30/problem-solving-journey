class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(10)
let node2 = new Node(20)
let node3 = new Node(30)
let node4 = new Node(40)

node1.next = node2
node2.next = node3
node3.next = node4
/* console.log(node1)
console.log(node1.value)
console.log(node1.next.value)
console.log(node1.next.next.value)
console.log(node1.next.next.next.value) */

function printLinkedList(head) {
    let current = head
    while (current !== null) {
        console.log("node:", current.value)
        current = current.next
    }
}

function countLinkedList(head) {
    let current = head
    let count = 0
    while (current !== null) {
        count++
        current = current.next
    }
    console.log("count", count)
}

function search(head, node) {
    let current = head
    while (current !== null) {
        if (current.value === node) {
            return true
        }
        current = current.next
    }
    return false
}

function sum(head) {
    let current = head
    let sum = 0
    while (current !== null) {
        sum += current.value
        current = current.next
    }
    console.log(sum)
}

function max(head) {
    let current = head
    let max = head.value
    while (current !== null) {
        max = Math.max(max, current.value)
        current = current.next
    }
    console.log(max)
}

printLinkedList(node1)
countLinkedList(node1)
console.log(search(node1, 30))
sum(node1)
max(node1)