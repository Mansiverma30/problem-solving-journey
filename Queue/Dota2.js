function dota(senate) {
    let r = []
    let d = []
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") {
            r.push(i)
        } else {
            d.push(i)
        }
    }

    while (r.length !== 0 && d.length !== 0) {
        if (r[0] < d[0]) {
            let v = r.shift()
            d.shift()
            r.push(v + senate.length)

        } else {
            let v = d.shift()
            r.shift()
            d.push(v + senate.length)

        }
    }
    if (r.length > 0) {
        console.log("Radiant")
    } else console.log("Dire")
}

dota("RDDR")