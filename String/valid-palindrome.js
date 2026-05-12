// Problem: Valid Palindrome
// Input: s = "A man, a plan, a canal: Panama"
// Output: true

// Here I've to return true if the string is a palindrome otherwise false. I've to ignore spaces, special characters, and uppercase/lowercase letters.

// Brute Force Solution
// Didn't implement brute force because I directly thought of the optimized approach 😏

function bruteForce(s) {
    return ""
}

// Optimized Solution
// Time Complexity: O(n), Space Complexity: O(n)

// Here I first cleaned the string using regex (took help from ChatGPT because I don't know much about regex syntax yet 😭).
// Then I used the two pointers approach: one pointer from the start and another from the end. If both characters matched, I moved the pointers inward. Otherwise, I returned false.

function optimized(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    let i = 0
    let j = s.length - 1

    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }

        i++
        j--
    }

    return true
}

// console.log(bruteForce("A man, a plan, a canal: Panama"))
console.log(optimized("A man, a plan, a canal: Panama"))

// Pattern Learned:
// Use two pointers to compare values from both ends
// Preprocess the string before applying logic