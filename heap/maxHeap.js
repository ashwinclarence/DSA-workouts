class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Restore the max-heap property by moving the element at index up
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Remove and return the maximum element (root) from the heap
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    // Restore the max-heap property by moving the element at index down
    bubbleDown(index) {
        let length = this.heap.length;
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftIndex < length && this.heap[leftIndex] > this.heap[index]) {
                swapIndex = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex] > (swapIndex === null ? this.heap[index] : this.heap[leftIndex])) {
                swapIndex = rightIndex;
            }
            if (swapIndex === null) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
}

// Example usage
let maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);

console.log("Heap array:", maxHeap.heap); // Output: [30, 20, 5, 10]

console.log("Removed max:", maxHeap.remove()); // Output: 30
console.log("Heap array after removal:", maxHeap.heap); // Output: [20, 10, 5]
