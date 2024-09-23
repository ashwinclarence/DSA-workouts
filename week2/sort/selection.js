



function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let smallIndex = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] > arr[smallIndex]) {
                smallIndex = j;
            }
        }

        if (smallIndex !== i) {
            [arr[smallIndex], arr[i]] = [arr[i], arr[smallIndex]];
        }
    }
    return arr;
}

let arr = [5, 3, 2, 5, 2, 57, 23, -32, 9, 0];


console.log(selectionSort(arr));
