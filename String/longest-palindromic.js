// Problem: Longest Palindromic Substring
// Input: s = "babad"
// Output: "bab" or "aba"

// Here I've to return the longest substring which is a palindrome.


// Brute Force Solution
// Time Complexity: O(n³) Space Complexity: O(1)

// Here I:
// 1. Generate all possible substrings.
// 2. Check if each substring is a palindrome.
// 3. If it is a palindrome and longer than the current answer, update longest.
// 4. Return the longest palindrome found.

function bruteForce(s) {
    let longest = s[0]

    for (let i = 0; i < s.length; i++) {

        let res = s[i]

        for (let j = i + 1; j < s.length; j++) {

            res = res + s[j]

            if (palindrome(res)) {

                if (res.length > longest.length) {
                    longest = res
                }
            }
        }
    }

    return longest
}

function palindrome(res) {

    let i = 0
    let j = res.length - 1

    while (i < j) {

        if (res[i] !== res[j]) {
            return false
        }

        i++
        j--
    }

    return true
}

// Optimized Solution (Expand Around Center)
// Time Complexity: O(n²) Space Complexity: O(1)

// Here I:
// 1. Treat every index as the center of a palindrome.
// 2. Expand left and right while characters match.
// 3. Check both:
//      Odd length palindrome
//      Even length palindrome
// 4. Keep updating the longest palindrome.
// 5. Return the longest palindrome found.

function optimized(s) {

    let longest = s[0]

    for (let i = 0; i < s.length; i++) {

        // Odd Length Palindrome
        let odd = expand(i, i, s)

        if (odd.length > longest.length) {
            longest = odd
        }

        // Even Length Palindrome
        let even = expand(i, i + 1, s)

        if (even.length > longest.length) {
            longest = even
        }
    }

    return longest
}

function expand(left, right, s) {

    while (
        left >= 0 &&
        right < s.length &&
        s[left] === s[right]
    ) {
        left--
        right++
    }

    return s.slice(left + 1, right)
}

console.log(bruteForce("babad"))
console.log(optimized("babad"))

// Pattern Learned:
// 1. Expand Around Center
// 2. Two Pointers
// 3. Palindrome Expansion

// Key Observations:
// 1. Every palindrome has a center.
// Odd Length Palindrome:
// aba
//  ^
// racecar
//    ^
// Center = Single Character
// 2. Even Length Palindrome:
// abba
//  ^^
// bb
// ^^
// Center = Two Characters
// 3. Instead of generating all substrings, we can start from the center and expand outward.

// Example:
// "aba"
// left = 1
// right = 1
// Expand:
// b a b
// ^   ^
// Continue while characters match.
// 4. When expansion stops left and right have moved one step outside the palindrome.
// So:
// return s.slice(left + 1, right)
// gives the actual palindrome.
// Biggest Learning:
// Brute Force:
// Generate substring -> Check palindrome
// Optimized:
// Assume palindrome center -> Expand outward
// This was my first problem using the Expand Around Center pattern.