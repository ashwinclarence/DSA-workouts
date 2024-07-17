

function prime(n) {
    if (n < 2) {
        return `${n} is not a prime number`
    }

    // math.sqrt is used because if number is divisible by other number then that number will be less than half of the original one
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}


console.log(prime(10))
console.log(prime(7))


// time complexity is linear
// Big-O = O(sqrt(n))