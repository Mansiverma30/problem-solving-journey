function largestReactangleAreaBrute(heights) {
    let maxArea = -Infinity
    for (let i = 0; i < heights.length; i++) {
        let height = heights[i]
        let left = i
        let right = i
        while (left > 0 && heights[left - 1] >= heights[i]) {
            left--
        }
        while (right < heights.length - 1 && heights[right + 1] >= heights[i]) {
            right++
        }
        let width = right - left + 1
        let area = height * width
        maxArea = Math.max(area, maxArea)
        console.log(area, width, height)
    }
    return maxArea
}

function largestReactangleAreaOptimized(heights) {
    let stack = [-1]
    let maxArea = 0
    heights.push(0)
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[i] < heights[stack[stack.length - 1]]) {
            let poppedIndex = stack.pop()
            let width = i - stack[stack.length - 1] - 1
            let area = heights[poppedIndex] * width
            maxArea = Math.max(maxArea, area)
        }
        stack.push(i)
    }
    return maxArea
}

console.log(largestReactangleAreaOptimized([2, 5, 7, 3]))