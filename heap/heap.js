



class Heap{
    constructor() {
        this.Heap=[]
    }

    insert(value) {
        this.Heap.push(value);
        this.bubbleUp(this.Heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor(index - 1 / 2);
            if (this.Heap[index] >= this.Heap[parentIndex]) break;
            [this.Heap[index], this.Heap[parentIndex]] = [this.Heap[parentIndex], this.Heap[index]];
            index = parentIndex;
        }
    }

    remove() {
        if (this.Heap.length === 0) return null;
        if (this.Heap.length === 1) return this.Heap.pop();

        let min = this.Heap[0];
        this.Heap[0] = this.Heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(index) {
        let length = this.Heap.length - 1;

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 1;
            let swapIndex = null;

            if (leftIndex < length && this.Heap[leftIndex] < this.Heap[index]) {
                swapIndex = leftIndex;
            }

            if (rightIndex < length && this.Heap[rightIndex] < (swapIndex === null ? this.Heap[index] : this.Heap[leftIndex])) {
                swapIndex = rightIndex;
            }

            if (swapIndex === null) break;

            [this.Heap[index], this.Heap[swapIndex]] = [this.Heap[swapIndex], this.Heap[index]];
            index = swapIndex;
        }
    }

    display() {
        console.log(this.Heap);
    }
}


let heap = new Heap();

heap.insert(10)
heap.insert(2)
heap.insert(3)
heap.insert(60)
heap.insert(5)
heap.insert(6)
heap.insert(7)
heap.insert(8)

heap.display();
