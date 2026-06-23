class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(1)
let node3 = new Node(2)
let node4 = new Node(3)
let node5 = new Node(3)
let node6 = new Node(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

function removeDuplicate(head) {
    let current = head
    while (current !== null && current.next !== null) {
        if (current.value === current.next.value) {
            current.next = current.next.next
        } else current = current.next;
    }
    return head
}

console.log(removeDuplicate(node1))