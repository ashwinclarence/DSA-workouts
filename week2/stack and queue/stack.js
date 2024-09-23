

class stack{
    constructor() {
        this.stack = new Array();
    }

    isEmpty() {
        return this.length === 0;
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    display() {
        console.log(this.stack);
    }
}


const s = new stack();

s.push(12)
s.push(7)
s.push(34)
s.push(4)
s.push(9)
s.push(3)

s.display()