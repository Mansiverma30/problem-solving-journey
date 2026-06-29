class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(2)
let node4 = new Node(1)

node1.next = node2
node2.next = node3
node3.next = node4

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

function isPalindrome(head) {
    let current = head
    let middle = middleofLinkedList(head)
    let revMiddle = reverseLinkedList(middle)
    while (revMiddle !== null) {
        if (current.value !== revMiddle.value) {
            return false
        }
        current = current.next
        revMiddle = revMiddle.next
    }
    return true
}

console.log(isPalindrome(node1))