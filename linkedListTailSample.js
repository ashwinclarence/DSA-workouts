class Node{
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size===0
    }

    print() {

        if (this.isEmpty()) {
            console.log("list is empty")
            return
        }
        let curr = this.head;
        let listValue = '';
        while (curr) {
            listValue+=`${curr.value} `
            curr = curr.next;
        }

        console.log(listValue)

    }


    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }


    removeFromStart() {
        if (this.isEmpty()) {
            console.log("the list is empty");
            return
        }

        let removedNode = this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        } 
        this.size--;
        return removedNode.value;

    }


    removeFromEnd() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        }

        let removedNode = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return removedNode.value;
    }
}

module.exports=LinkedList


// const list = new LinkedList();

// list.prepend(1)

// list.append(40)


// list.print()

// console.log(list.removeFromStart())

// console.log(list.removeFromEnd())

// list.print()