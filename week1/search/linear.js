


function linear(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i+1;
        }
    }
    return "item not found"
}

let arr = [2, 4, 6, 4, 2, 56, 3, 67];
console.log(linear(arr,4));
