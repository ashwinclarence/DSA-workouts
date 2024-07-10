function checkPalindromeRecursion(s) {
    if (s.length <= 1) {
        return true
    }

    if (s[0] != s[s.length-1]) {
        return false
    }

    return checkPalindromeRecursion(s.slice(1,-1))
}

console.log(checkPalindromeRecursion("ss"))