

const linkedList = require('./linkedListTailSample');


class linkedListStack{
    constructor() {
        this.list=new linkedList()
    }


    push(value) {
        this.list.append(value)
    }

    pop() {
        return this.list.removeFromStart()
    }

    peek() {
        return this.list.head.value;
    }

    print() {
        return this.list.print()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

   
}


const stack = new linkedListStack();

console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
stack.print()