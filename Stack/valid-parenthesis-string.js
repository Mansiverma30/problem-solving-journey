// Problem: Valid Parenthesis String
// Input: s = "(*)"
// Output: true

// Here I've to return true if the string can be a valid parenthesis string, where '*' can act as '(', ')' or an empty string.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(s) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(n)

// Here I used two stacks.
// One stack stores indices of '(' and the other stores indices of '*'.
// While traversing, I first try to match ')' with '('.
// If no '(' is available, I use '*' as '('.
// After traversal, any remaining '(' can only be matched with '*' that appear after them.
// This is why I store indices instead of characters.
// Took help from ChatGPT in While loop

function optimized(s) {
    let stack = []
    let stack2 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i)
        }
        else if (s[i] === ")" && stack.length > 0) {
            stack.pop()
        } else if (s[i] === "*") {
            stack2.push(i)
        } else if ((stack.length === 0 && s[i] === ")")) {
            if (stack2.length > 0) {
                stack2.pop()
            } else {
                return false
            }
        }
    }
    while (stack.length > 0 && stack2.length > 0) {
        let openIdx = stack[stack.length - 1]
        let starIdx = stack2[stack2.length - 1]

        if (starIdx > openIdx) {
            stack.pop()
            stack2.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}

//console.log(bruteForce("(*)"))
console.log(optimized("(*"))

// Pattern Learned:
// Stack
// Multiple Stacks
// Store indices instead of characters when position matters
// Greedy matching
// Post-processing unmatched elements after traversal

// Status:
// ACCEPTED
//
// Lessons Learned:
// '*' can act as '('
// '*' can act as ')'
// '*' can act as empty string
//
// Position matters.
// (* -> true
// *( -> false
//
// Store indices instead of characters.
// This question personally attacked me.