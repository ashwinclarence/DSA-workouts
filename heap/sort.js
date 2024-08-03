




class MinHeap{
    constructor() {
        this.heap=[]
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parentIndex]) {
                break;
            }

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let removedValue = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown(0);

        return removedValue
    }

    bubbleDown(index) {
        
        let length = this.heap.length;

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftIndex < length && this.heap[leftIndex] < this.heap[index]) {
                swapIndex = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex] < (swapIndex === null ? this.heap[index] : this.heap[leftIndex])) {
                swapIndex = rightIndex;
            }

            if (swapIndex === null) {
                break;
            }

            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];

            index = swapIndex;
        }
    }
}


function sort(array) {
    let sorted = [];
    let minHeap = new MinHeap();

    for (const ele of array) {
        minHeap.insert(ele)
    }

    while (minHeap.heap.length > 0) {
        sorted.push(minHeap.remove());
    }

    return sorted;
}

let array = [3, 4, 2, 56, 3, 2];

console.log(sort(array))