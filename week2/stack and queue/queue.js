



class Queue {
    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        let removedValue = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return removedValue;
    }

    peek() {
        return this.queue[this.front];
    }

    display() {
        let result = Object.values(this.queue);
        console.log(result);
        
    }
}


const d = new Queue();

d.enqueue(1);
d.enqueue(2);
d.enqueue(3);
d.enqueue(4);
d.enqueue(5);

d.dequeue();

d.display();