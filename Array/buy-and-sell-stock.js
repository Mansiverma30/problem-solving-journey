// Problem: Best time to buy and sell stocks
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5

// Here I've to return the maximum profit I can achieve from this transaction, if no profit return 0

// Brute Force Solution
// Time complexity: O(n^2), Space Complexity: O(1)
// Here I used nested loops, and checked each pair and updated maxProfit whenever a larger profit was found

function bruteForce(prices) {
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            maxProfit = Math.max(profit, maxProfit)
        }
    }
    return maxProfit
}

// Optimized Solution
// Time complexity: O(n), Space Complexity: O(1)
// Here I kept track of minimum from left to right, and found the profit by subtracting current price with minimum in a loop, and compared it from the maxProfit and profit, and then I returend the maxProfit

function optimized(prices) {
    let maxProfit = 0
    let min = Infinity
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min)
        let profit = prices[i] - min
        maxProfit = Math.max(profit, maxProfit)
    }
    return maxProfit
}

console.log(bruteForce([7, 1, 5, 3, 6, 4]))
console.log(optimized([7, 1, 5, 3, 6, 4]))

// Pattern Learned:
// Track minimum value while traversing array