// Problem: Balanced Brackets
// Input: s = "()[]{}"
// Output: true

// Here I've to return true if brackets are balanced, otherwise false.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(s) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(n)

// Here I used stack. Opening brackets are pushed into stack. For closing brackets, I checked top of stack. If brackets matched, I popped the stack. Otherwise returned false.

function optimized(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i])
        }
        else if (s[i] === ")" && (stack[stack.length - 1] === "(") || (s[i] === "]" && stack[stack.length - 1] === "[") || (s[i] === "}" && stack[stack.length - 1] === "{")) {
            stack.pop()
        } else return false
    }
    return stack.length === 0
}

//console.log(bruteForce("()[]{}"))
console.log(optimized("()[]{}"))

// Pattern Learned:
// Stack
// LIFO (Last In First Out)
// Top element checking
// Matching brackets