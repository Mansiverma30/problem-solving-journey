function ping(time) {
    let queue = []
    let ans = []
    for (const t of time) {
        queue.push(t)
        while (queue[0] < t - 3000) {
            queue.shift()
        }
        ans.push(queue.length)
    }
    console.log(ans)
}

const times = [1, 100, 3001, 3002, 7000];
ping(times)