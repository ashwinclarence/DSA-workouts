class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class Stack {

    constructor() {
        this.head = null;
        this.top = 0;
    }


    isEmpty() {
        return this.top === 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.top++;
        } else {
            node.next = this.head;
            this.head = node;
            this.top++;
        }
    }

   

    display() {
        let curr = this.head;

        let value = '';

        while (curr) {
            value += `${curr.value} `;
            curr = curr.next;
        }

        console.log(value)
    }
}


const s = new Stack();

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5);

s.display()

// s.display()

