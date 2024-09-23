


function bubbleSort(arr) {
    let flag;
    do {
        flag = false;
        for (let i = 0; i < arr.length-1; i++){
            if (arr[i] < arr[i + 1]) {
                flag = true;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    } while (flag);
    return arr;
}

let arr = [5, 3, 2, 5, 2, 57, 23, -32, 9, 0];

console.log(bubbleSort(arr));
