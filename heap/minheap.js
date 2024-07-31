


class Heap{
    constructor() {
        this.heap = [];

    }
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        let root = this.heap[0];
        let lastValue = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.heapifyDown();
        }
        return root;
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
                if((swap===null &&))
            }
        }
    }
}