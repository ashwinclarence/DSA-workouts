



function quickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}


function partition(arr, left, right) {
    let pivot = arr[right];

    for (let i = left; i < right; i++){
        if (arr[i] < pivot) {
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return left;
}




let arr = [5, 3, 2, 5, 2, 57, 23, -32, 9, 0];


console.log(quickSort(arr));

