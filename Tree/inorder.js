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

function inorder(root) {
    if (!root) return
    inorder(root.left)
    console.log(root.value)
    inorder(root.right)
}

inorder(root)