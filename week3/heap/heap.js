class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value); // Add the new value to the end of the heap
        this.bubbleUp(); // Restore heap property
    }

    remove() {
        if (this.heap.length === 0) return null; // If heap is empty, return null

        const root = this.heap[0]; // Store the root (minimum value in min-heap)
        const lastValue = this.heap.pop(); // Remove the last element
        if (this.heap.length > 0) {
            this.heap[0] = lastValue; // Move the last element to the root position
            this.heapifyDown(); // Restore heap property
        }
        return root; // Return the removed root value
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element >= parent) break;

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }
}

// Example usage:
const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(1);

console.log(heap.heap);
console.log(heap.remove()); // Output: 1
console.log(heap.remove()); // Output: 3
console.log(heap.heap);