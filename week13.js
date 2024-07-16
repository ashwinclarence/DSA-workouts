





function search(arr, target, start, end) {

    if (start <= end) {
        return -1
    }
    
    let middle = Math.floor((start + end) / 2);
    
    if (target === arr[middle]) {
        return middle
    }
    
    if (target < arr[middle]) {
        return search(arr,target,start,middle-1)
    } else {
        return search(arr,target,middle+1,end)
    }

  
}




const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(search(arr,-4,0,arr.length-1))