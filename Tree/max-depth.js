class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

let root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(8)


function maxDepth(root) {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

console.log(maxDepth(root))