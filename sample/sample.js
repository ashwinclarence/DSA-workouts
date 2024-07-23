class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined; // Return undefined when the queue is empty
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined; // Return undefined when the queue is empty
        }
        return this.queue[0];
    }

    display() {
        console.log(this.queue);
    }

    sort() {

        let arr = [];
        while (!this.isEmpty()) {
            arr.push(this.dequeue());
        }

        arr.sort((a, b) => a - b)
        
        for (const ele of arr) {
            this.enqueue(ele)
        }
    }
}

// Example usage:
const q = new Queue();

q.enqueue(10);
q.enqueue(32);
q.enqueue(3);
q.enqueue(47);
q.enqueue(-5);

q.sort();
q.display(); // Output: [-5, 3, 10, 32, 47]
