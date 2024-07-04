

// find the fibonacci series on nth number

function fibRecursive(n) {
    if (n < 2) {
        return n
    }
    return fibRecursive(n-1)+fibRecursive(n-2)
}



console.log(fibRecursive(0));
console.log(fibRecursive(2));
console.log(fibRecursive(10));
console.log(fibRecursive(45));


// print the fibonacci in a given range
let num = 20;
let i = 0;
while (i <= num) {
    console.log(fibRecursive(i));
    i++;
}



// time complexity

// Big-O = O(2^n)