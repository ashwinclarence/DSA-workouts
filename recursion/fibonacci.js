


// create a function for getting the fibonacci series
function fibonacci(n) {

    // add the first two numbers
    const fib = [0, 1]

    // find the rest of the numbers in a loop
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(10));


// Big-O = O(n)
// linear time complexity