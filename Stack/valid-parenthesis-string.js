// Problem: Valid Parenthesis String
// Input: s = "(*)"
// Output: true

// Here I've to return

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(s) {
    return ""
}

// Optimized Solution
// Time Complexity: O(), Space Complexity: O()

// Here I

function optimized(s) {
    let stack = []
    let stack2 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i])
            console.log(stack)
        }
        else if (s[i] === ")" && (stack[stack.length - 1] === "(")) {
            stack.pop()
            console.log(stack)
        } else if (s[i] === "*") {
            stack2.push(s[i])
            console.log(stack2)
        } else if ((stack.length === 0 && s[i] === ")")) {
            if (stack2.length > 0) {
                stack2.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

//console.log(bruteForce("()[]{}"))
console.log(optimized("(*)"))

// Pattern Learned: