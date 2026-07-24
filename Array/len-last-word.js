function lengthOfLastWord(s) {
    s = s.trim('').split(' ')
    return s[s.length - 1].length
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))