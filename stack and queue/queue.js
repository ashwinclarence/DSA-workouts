

class Queue{

    constructor() {
        this.queue=[]
    }

    isEmpty() {
        return this.queue.length===0
    }

    enqueue(value) {
        this.queue.push(value)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "queue is empty"
        }

        return this.queue.shift()
    }

    peek() {
        if (this.isEmpty()) {
            return "queue is empty"
        }
        return this.queue[0]
    }

    print() {
       console.log(this.queue)
    }
}


const q = new Queue();

q.enqueue(10)
q.enqueue(104)
q.enqueue(99)
q.enqueue(789);

q.print()

console.log(q.dequeue())

console.log(q.peek())

q.print()


