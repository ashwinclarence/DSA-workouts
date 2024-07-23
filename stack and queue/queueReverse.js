


class Queue{

    constructor() {
        this.queue = new Array();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(value) {
        this.queue.unshift(value)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "queue is empty"
        }

        return this.queue.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "the queue is empty"
        }

        return this.queue[this.queue.length-1]
    }

    display() {
        console.log(this.queue)
    }

    reverse() {
        let arr = [];
        
        while (!this.isEmpty()) {
            arr.push(this.dequeue())
        }

        this.queue=arr
    }

    sort() {
        let auxStack = new Stack();

        while (!this.isEmpty()) {
            let temp = this.pop();

            while (!auxStack.isEmpty() && auxStack.peek() < temp) {
                this.push(auxStack.pop())
            }

            auxStack.push(temp);
        }

        while (!auxStack.isEmpty()) {
            this.push(auxStack.pop())
        }
    }
}


const q = new Queue();

q.enqueue(1)
q.enqueue(3)
q.enqueue(5)
q.enqueue(7)
q.enqueue(2)
q.enqueue(4)
q.enqueue(6)

q.display()

q.reverse()

q.display()