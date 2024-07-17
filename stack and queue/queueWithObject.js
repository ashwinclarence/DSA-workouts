

class Queue{

    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }

    isEmpty() {
        return this.rear-this.front===0
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
        return this.queue[this.front]
    }

    print() {
        return Object.values(this.queue)
    }
}


const q = new Queue();
q.enqueue(10)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5);

q.dequeue()
q.dequeue()
q.dequeue()

console.log(q.print())
console.log(q.peek())