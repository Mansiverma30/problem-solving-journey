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

function removeFromEnd(head, n) {
    let dummy = new Node(0)
    dummy.next = head
    let fast = dummy
    let slow = dummy
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next
    }
    while (fast !== null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    console.log(dummy.next)
}

removeFromEnd(node1, 2)

/*
1 -> 2 -> 3 -> 4 -> 5
*/