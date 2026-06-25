class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(9)
let node2 = new Node(9)
let node3 = new Node(9)
let node4 = new Node(1)
let node5 = new Node(6)
let node6 = new Node(4)
let node7 = new Node(7)

node1.next = node2
node2.next = node3

function addTwoNumbers(l1, l2) {
    let answerHead = null
    let answerTail = null
    let digit = l1
    let digit2 = l2
    let carry = 0
    while (digit !== null || digit2 !== null) {
        let value1 = digit ? digit.value : 0
        let value2 = digit2 ? digit2.value : 0
        let sum = value1 + value2 + carry
        if (sum >= 10) {
            carry = 1
            sum %= 10
        } else carry = 0
        let newNode = new Node(sum)
        if (answerHead === null) {
            answerHead = newNode
            answerTail = newNode
        } else {
            answerTail.next = newNode
            answerTail = newNode
        }
        if (digit) digit = digit.next
        if (digit2) digit2 = digit2.next

    }
    if (carry === 1) {

        answerTail.next = new Node(carry)

    }
    console.log(answerHead)
}

addTwoNumbers(node1, node4)

/*
2 -> 9 -> 3 -> 7
5 -> 9 -> 4

*/