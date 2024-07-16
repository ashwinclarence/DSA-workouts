function rev(s) {
    if (s.length <= 1) {
        return s
    }

    return rev(s.slice(1))+s[0]
}


console.log(rev("mango"))