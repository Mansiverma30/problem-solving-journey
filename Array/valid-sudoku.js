// Problem: Valid Sudoku
// Input: 9x9 Sudoku Board
// Output: true / false

// Here I've to return true if the given Sudoku board is valid, otherwise return false.

// Rules:
// 1. Each row must contain digits 1-9 without repetition.
// 2. Each column must contain digits 1-9 without repetition.
// 3. Each 3x3 box must contain digits 1-9 without repetition.
// 4. Empty cells are represented by '.' and should be ignored.

// Optimized Solution
// Time Complexity: O(1) Space Complexity: O(1)

// Here I:
// 1. Traverse each row and use a Set to detect duplicates.
// 2. Traverse each column and use a Set to detect duplicates.
// 3. Traverse each 3x3 box and use a Set to detect duplicates.
// 4. Return false immediately if any duplicate is found.
// 5. Return true if all validations pass.

function optimized(board) {

    // Check Rows
    for (let row = 0; row < 9; row++) {
        let seen = new Set()

        for (let col = 0; col < 9; col++) {

            if (board[row][col] === '.') continue

            if (seen.has(board[row][col])) {
                return false
            }

            seen.add(board[row][col])
        }
    }

    // Check Columns
    for (let col = 0; col < 9; col++) {
        let seen = new Set()

        for (let row = 0; row < 9; row++) {

            if (board[row][col] === '.') continue

            if (seen.has(board[row][col])) {
                return false
            }

            seen.add(board[row][col])
        }
    }

    // Check 3x3 Boxes
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {

            let seen = new Set()

            for (let r = row; r < row + 3; r++) {
                for (let c = col; c < col + 3; c++) {

                    if (board[r][c] === '.') continue

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

console.log(optimized(board))

// Pattern Learned:
// 1. 2D Array Traversal
// 2. Row Traversal
// 3. Column Traversal
// 4. 3x3 Box Traversal
// 5. Using Set for Duplicate Detection

// Key Observations:

// 1. Rows
//    board[row][col]

// 2. Columns
//    Keep column fixed and move through rows.

// 3. 3x3 Boxes
//    Box starting positions:
//    (0,0) (0,3) (0,6)
//    (3,0) (3,3) (3,6)
//    (6,0) (6,3) (6,6)

// 4. Duplicate Detection
//    If a value already exists in Set,
//    the Sudoku board is invalid.

// Biggest Learning:

// Not every problem is about optimization.
// Sometimes the challenge is figuring out
// how to traverse the data structure correctly.