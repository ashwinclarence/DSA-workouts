



class Stack{

    constructor() {
        this.stack = new Array();
    }


    isEmpty() {
        return this.stack.length===0
    }


    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "stack is empty"
        }

        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "stack is empty"
        }

        return this.stack[this.stack.length - 1];
    }

    display() {
        console.log(this.stack)
    }

    reverse() {
        const arr = [];

        while (!this.isEmpty()) {
            arr.push(this.pop())
        }

        this.stack = arr;
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

const s = new Stack();

s.push(1)
s.push(20)
s.push(3)
s.push(4)
s.push(5)

s.display()
// console.log(s.pop())
// s.reverse()
s.sort()

s.display()