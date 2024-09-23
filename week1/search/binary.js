


function binary(arr, target) {
    
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            return middle+1;
        }

        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return "item not found";
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log(binary(arr,4));
