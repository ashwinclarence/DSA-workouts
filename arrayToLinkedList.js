

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    isEmpty() {
        return this.size === 0
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head;
            let listValue = "";
            while (curr) {
                listValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValue)
        }
    }


    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
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
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }


    removeFromStart() {
        if (this.isEmpty()) {
            console.log("the list is empty")
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
            console.log("the list is empty");
            return;
        }

        let removedNode = this.tail;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
        }

        this.size--;
        return removedNode.value;
    }

}


function arrayToList(arr) {

    const list = new LinkedList();
    for (const ele of arr) {
        list.append(ele)
    }

    list.print()
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arrayToList(arr)




