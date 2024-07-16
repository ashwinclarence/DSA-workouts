


function bubbleSort(arr) {
    let flag;
    do {
        flag = false
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] < arr[i + 1]) {
                flag = true
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    } while (flag)
}



const arr = [100,7, 2, 6, 1, -1, -4, 2];
bubbleSort(arr);
console.log(arr)