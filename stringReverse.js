

function reverseString(s) {
    if (s.length === 1) {
        return s
    }

    return reverseString(s.slice(1))+s[0]
}

console.log(reverseString("ashwin"))