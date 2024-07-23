


function merge(a, b) {
    let sortedArr = []
    
    while (a.length && b.length) {
        if (a[0] > b[0]) {
            sortedArr.push(b.shift())
        } else {
            sortedArr.push(a.shift())
        }
    }

    return [...sortedArr,...a,...b]
}


const arr1 = [2,4,6,8,20];
const arr2 = [1,3,5,7,9,10];

console.log(merge(arr1,arr2))