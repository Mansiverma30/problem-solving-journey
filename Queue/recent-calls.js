function ping(time) {
    let queue = []
    for (const t of time) {
        queue.push(t)
        while (queue[0] < t - 3000) {
            queue.shift()
        }
    }
    console.log(queue.length)
}

const times = [1, 100, 3001, 3002];
ping(times)