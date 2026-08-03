function searchMatrixBrute(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true
            }
        }
    }
    return false
}

function searchMatrixOptimized(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let left = 0
    let right = rows * cols - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        let row = Math.floor(mid / cols)
        let col = mid % cols
        let value = matrix[row][col]
        if (value === target) return true
        else if (value < target) left = mid + 1
        else right = mid - 1
    }
    return false
}

console.log(searchMatrixBrute([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10))
console.log(searchMatrixOptimized([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 11))