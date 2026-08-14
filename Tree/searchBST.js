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

function searchBST(root, val) {
    if (!root) return null
    if (root.value === val) return root
    if (val < root.value) return searchBST(root.left, val)
    return searchBST(root.right, val)
}

console.log(searchBST(root, 5))