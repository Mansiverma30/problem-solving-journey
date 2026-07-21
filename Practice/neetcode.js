class Node {
    constructor(val) {
        this.val = val
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

function fun(head) {
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


console.log(fun(node1))