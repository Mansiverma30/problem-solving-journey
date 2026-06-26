class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(1)
let node5 = new Node(3)
let node6 = new Node(4)


node1.next = node2
node2.next = node3

node4.next = node5
node5.next = node6

function mergeList(l1, l2) {
    let digit = l1
    let digit2 = l2
    let answerHead = null
    let answerTail = null
    while (digit !== null && digit2 !== null) {

        if (digit.value <= digit2.value) {
            let newNode = new Node(digit.value)
            if (answerHead === null) {
                answerHead = newNode
                answerTail = newNode
            } else {
                answerTail.next = newNode
                answerTail = newNode
            }
            if (digit) digit = digit.next
        } else {
            let newNode = new Node(digit2.value)
            if (answerHead === null) {
                answerHead = newNode
                answerTail = newNode
            } else {
                answerTail.next = newNode
                answerTail = newNode
            }
            if (digit2) digit2 = digit2.next
        }
    }
    if (digit !== null) {
        answerTail.next = digit
    }
    if (digit2 !== null) {
        answerTail.next = digit2
    }
    console.log(answerHead)
}
mergeList(node1, node4)

/*
1 -> 2 -> 3
1 -> 3 -> 4

1 -> 1 -> 2 -> 3 -> 3 -> 4
*/