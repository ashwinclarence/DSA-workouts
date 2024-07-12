const linkedList = require('./linkedListTailSample')


class linkedListQueue{
    constructor() {
        this.list=new linkedList()
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.removeFromStart()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    peek() {
        return this.list.head.value;
    }
    print() {
        return this.list.print()
    }
}


const queue = new linkedListQueue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

queue.print()

console.log(queue.dequeue())
console.log(queue.dequeue())
queue.print()


console.log(queue.peek())
console.log(queue.isEmpty())