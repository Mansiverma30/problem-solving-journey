function asteroidCollision(asteroids) {
    let stack = []
    for (let i = 0; i < asteroids.length; i++) {
        let current = asteroids[i]
        if (current > 0) {
            stack.push(current)
        }
        else {
            let alive = true
            while (stack[stack.length - 1] > 0 && current < 0) {
                let top = stack[stack.length - 1]
                let destroyed = false
                if (top > Math.abs(current)) {
                    alive = false
                    break
                } else if (top < Math.abs(current)) {
                    stack.pop()
                } else {
                    stack.pop()
                    alive = false
                    break
                }
            }
            if (alive) {
                stack.push(current)
            }
        }
    }
    console.log(stack)
}

asteroidCollision([3, 5, -6, 2, -1, 4])