function fun(board) {
    for (let row = 0; row < 9; row++) {
        let seen = new Set()
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                continue
            }
            if (seen.has(board[row][col])) {
                return false
            }
            seen.add(board[row][col])
        }
    }
    for (let col = 0; col < 9; col++) {
        let seen = new Set()
        for (let row = 0; row < 9; row++) {
            if (board[row][col] === ".") {
                continue
            }
            if (seen.has(board[row][col])) {
                return false
            }
            seen.add(board[row][col])
        }
    }

    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            let seen = new Set()
            for (let r = row; r < row + 3; r++) {
                for (let c = col; c < col + 3; c++) {
                    if (board[r][c] === ".") {
                        continue
                    }
                    if (seen.has(board[r][c])) {
                        return false
                    }
                    seen.add(board[r][c])
                }
            }
        }
    }


    return true
}

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(fun(board))