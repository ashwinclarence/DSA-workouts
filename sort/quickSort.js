

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > pivot) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}


const arr = [4, 2, 45, 2, 1, -1, -19, 23, 5];
console.log(quickSort(arr))