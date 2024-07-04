

function factorial(n) {
    let sum = 1
    for (let i = n; i > 0; i--){
        sum*=i
    }
    return sum
}

console.log(factorial(0))

// time complexity is linear
// Big-O = O(n)