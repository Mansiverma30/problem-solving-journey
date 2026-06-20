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

function min(head) {
    let current = head
    let min = head.value
    while (current !== null) {
        min = Math.min(min, current.value)
        current = current.next
    }
    console.log("min", min)
}

function LinkedListToArray(head) {
    let arr = []
    let current = head
    while (current !== null) {
        arr.push(current.value)
        current = current.next
    }
    console.log(arr)
}

function ArrayToLinkedList(arr) {
    let head = new Node(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i])
        current.next = newNode
        current = current.next
    }
    console.log(head)
}

function MiddleofLinkedList(head) {
    let current = head
    let count = 0
    while (current !== null) {
        count++
        current = current.next
    }
    let middleIndex = Math.floor(count / 2)
    current = head
    let index = 0
    while (index < middleIndex) {
        current = current.next
        index++
    }
    return current.value
}

function findIndexOfValue(head, target) {
    let current = head
    let count = 0
    while (current !== null) {
        if (current.value === target) {
            return count
        } else count++
        current = current.next
    }
    return -1
}

function getAtIndex(head, index) {
    let current = head
    let count = 0
    while (current !== null) {
        if (count === index) {
            return current.value
        } else count++
        current = current.next
    }
    return -1
}

function lastElement(head) {
    let current = head
    while (current !== null) {
        if (current.next === null) {
            return current.value
        }
        current = current.next
    }
}

function secondLastElement(head) {
    let current = head
    while (current.next !== null) {
        if (current.next.next === null) {
            return current.value
        }
        current = current.next
    }
    return -1
}

function countOccurrences(head, target) {
    let current = head
    let count = 0
    while (current !== null) {
        if (current.value === target) {
            count++
        }
        current = current.next
    }
    console.log(count)
}

printLinkedList(node1)
countLinkedList(node1)
console.log(search(node1, 30))
sum(node1)
max(node1)
min(node1)
LinkedListToArray(node1)
ArrayToLinkedList([10, 20, 30, 40])
console.log(MiddleofLinkedList(node1))
console.log(findIndexOfValue(node1, 20))
console.log(getAtIndex(node1, 1))
console.log(lastElement(node1))
countOccurrences(node1, 10)
console.log(secondLastElement(node1))

/*
Linked List Basics Completed

Core Concepts:
- Node
- Head
- Next Pointer
- Traversal

Operations:
- Print
- Count
- Search
- Sum
- Max

Conversions:
- Linked List → Array
- Array → Linked List

Status:
Ready for beginner Linked List problems
*/