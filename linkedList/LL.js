class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.tail = null;
    }
}


class linkedList{
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    isEmpty() {
        return this.size === 0;
    }

   
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    arrayToLinkedList(arr) {
        for (const ele of arr) {
            this.append(ele)
        }
    }
}

let arr=[2,54,7,3,34,35,35]

const list = new linkedList();

// array to LL
// 

list.arrayToLinkedList(arr)