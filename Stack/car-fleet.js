function carFleet(target, position, speed) {
    let pairs = []
    for (let i = 0; i < position.length; i++) {
        pairs.push([position[i], speed[i]])
    }
    pairs = pairs.sort((a, b) => b[0] - a[0])
    let time = []
    for (let i = 0; i < pairs.length; i++) {
        let t = (target - pairs[i][0]) / pairs[i][1]
        time.push(t)
        while (time.length >= 2 && time[time.length - 1] <= time[time.length - 2]) {
            time.pop()
        }
    }
    return time.length
}

let target = 10
let position = [4, 1, 0, 7]
let speed = [2, 2, 1, 1]

console.log(carFleet(target, position, speed))