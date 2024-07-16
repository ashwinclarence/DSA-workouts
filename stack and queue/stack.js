


class stack{

    constructor() {
        this.stack=[]
    }


    push(value) {
        this.stack.push(value)
    }

    pop() {
        if (this.isEmpty()) {
            console.log("stack is empty");
            return "stack is empty in return"
        }

        return this.stack.pop()
    }


    print() {
       console.log(this.stack)
    }

    peek() {
        if (this.isEmpty()) {
            console.log("stack is empty")
        } else {
            return this.stack[this.stack.length-1]
        }
    }

    isEmpty() {
        return this.stack.length===0
    }
}



const s = new stack();

s.push(12)
s.push(124)
s.push(455)

s.print()


console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
s.print()