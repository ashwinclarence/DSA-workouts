



function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let valueToInsert = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] < valueToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = valueToInsert;
    }
    return arr;
}

let arr = [5, 3, 2, 5, 2, 57, 23, -32, 9, 0];


console.log(insertionSort(arr));
