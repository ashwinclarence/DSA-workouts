function recursiveBinarySearch(arr, target) {
    return search(arr,target,0,arr.length-1)
}


function search(arr, target, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return -1
    }
    
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {
        return search(arr,target,startIndex,middleIndex-1)
    } else {
        return search(arr,target,middleIndex+1,endIndex)
    }
}


console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9],7))
console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9],9))
console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9],1))
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))


// time complexity
// Big-O : O(logn)