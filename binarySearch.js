

function binarySearch(arr, target) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (target === arr[middle]) {
            return middle
        }
        if (target < arr[middle]) {
            end = middle - 1;
        }
        if (target >= arr[middle]) {
            start = middle + 1;
        }

    }
    return -1
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))


// time complexity
// Big-O: O(log n)