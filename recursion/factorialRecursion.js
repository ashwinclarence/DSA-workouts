



function factorialRecursion(n) {
    if (n === 0) {
        return 1
    }
   return n*factorialRecursion(n-1)
}


console.log(factorialRecursion(1))
console.log(factorialRecursion(4))
console.log(factorialRecursion(10))