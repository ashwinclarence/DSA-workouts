


function selectionSort(arr) {
    
    for (let i = 0; i < arr.length ; i++){
        let smallIndex = i
        
        for (let j = i + 1; j < arr.length ; j++){
            
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }

        if (smallIndex !== i) {
            [arr[i],arr[smallIndex]]=[arr[smallIndex],arr[i]]
        }
    }

    return arr
}


const arr = [4, 2, 1, -6, 45, 23, 2, 3, 3, 1]


selectionSort(arr);

console.log(arr)

