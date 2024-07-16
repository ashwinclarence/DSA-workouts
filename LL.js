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

    print() {
        if (this.isEmpty()) {
            console.log("the list is empty");
        } else {
            let listValue = "";
            let curr = this.head;
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

    removeFromFront() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
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
            console.log("list is empty");
            return;
        }

        let removedNode = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next=null;
        }
        this.size--;
        return removedNode.value;
    }
}


const list = new linkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.prepend(11)
list.prepend(12)
list.prepend(13)
list.prepend(14)
list.prepend(15)

list.print()
console.log(list.removeFromFront())
console.log(list.removeFromEnd())
list.print()