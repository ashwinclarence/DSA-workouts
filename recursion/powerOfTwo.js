

function checkPowerOfTwo(n) {

    if (n < 1) {
       return false
    }
    

    while (n>1) {
        if (n % 2 != 0) {
            return false
        }
        n=n/2
    }
    return true
}


console.log(checkPowerOfTwo(1))
console.log(checkPowerOfTwo(2))
console.log(checkPowerOfTwo(5))