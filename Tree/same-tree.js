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
let root1 = new TreeNode(10)
root1.left = new TreeNode(5)
root1.right = new TreeNode(15)
root1.left.left = new TreeNode(2)
root1.left.right = new TreeNode(8)

function sameTree(p, q) {
    if (!p && !q) {
        return true
    }
    if (!p) return false
    if (!q) return false
    if (p.value !== q.value) return false
    return sameTree(p.left, q.left) && sameTree(p.right, q.right)
}

console.log(sameTree(root, root1))