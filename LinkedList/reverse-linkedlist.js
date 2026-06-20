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
let node5 = new Node(50)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function reverseLinkedList(head) {
    let current = head
    let prev = null
    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    let res = []
    while (prev !== null) {
        res.push(prev.value)
        prev = prev.next
    }
    console.log(res)
}

reverseLinkedList(node1)