function isIsomorphic(s, t) {
    let map = new Map()
    let map1 = new Map()
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], t[i])
        }
        if (!map1.has(t[i])) {
            map1.set(t[i], s[i])
        }
        if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
            return false;
        }
        if (map1.has(t[i]) && map1.get(t[i]) !== s[i]) {
            return false;
        }
    }
    return true
}

console.log(isIsomorphic("aa", "ab"))

/*

e -> a
g -> d
g -> d

*/