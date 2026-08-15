function maxSlidingWindow(nums, k) {
    let max = []
    let dequeue = []
    for (let i = 0; i < nums.length; i++) {
        if (dequeue.length && dequeue[0] < i - k + 1) {
            dequeue.shift()
        }
        while (dequeue.length && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
            dequeue.pop()
        }
        dequeue.push(i)
        if (i >= k - 1) {
            max.push(nums[dequeue[0]])
        }
    }
    return max
}

console.log(maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3))