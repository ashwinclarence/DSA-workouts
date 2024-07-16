

console.log("palindrome");

// palindrome

function checkPalindromeRecursion(s) {
    if (s.length <= 1) {
        return true
    }

    if (s[0] != s[s.length - 1]) {
        return false
    }

    return checkPalindromeRecursion(s.slice(1,-1))
}

console.log(checkPalindromeRecursion("malayalam"))
console.log(checkPalindromeRecursion("apple"))
console.log("-----------------------------------------------------------------------------------------");
console.log("reverse a string");



// reverse a string

function reverseString(s) {
    if (s.length <= 1) {
        return s
    } 
    
    return reverseString(s.slice(1))+s[0]
}

console.log(reverseString("mango"))
console.log("-----------------------------------------------------------------------------------------");
console.log("fibonacci value");




// fibonacci value

function fibonacciCheck(num) {
    if (num <= 2) {
        return 1;
    }
    
    return fibonacciCheck(num-1)+fibonacciCheck(num-2)
    
}


console.log(fibonacciCheck(10))
console.log("-----------------------------------------------------------------------------------------");
console.log("factorial");



// factorial

function factorial(num) {
    if (num === 1) {
        return 1
    }
    
    return num*factorial(num-1)
}

console.log(factorial(10))
console.log("-----------------------------------------------------------------------------------------");


console.log("recursive range");
// recursive range

function recursiveRange(num) {
    if (num === 0) {
        return 0
    }
    
    return num + recursiveRange(num-1)
}

console.log(recursiveRange(2))
console.log("-----------------------------------------------------------------------------------------");