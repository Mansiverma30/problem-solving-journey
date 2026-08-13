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


function minDepth(root) {
    if (!root) return 0
    if (!root.left) return 1 + minDepth(root.right)
    if (!root.right) return 1 + minDepth(root.left)
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

console.log(minDepth(root))