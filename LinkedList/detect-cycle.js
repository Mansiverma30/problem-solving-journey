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
node5.next = node3

function detectCycle(head) {
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
}

console.log(detectCycle(node1))

// 10 -> 20 -> 30 -> 40 -> 50
//              |           |
//              -------------

