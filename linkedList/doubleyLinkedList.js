

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            console.log("list is empty")
        } else {
            let curr = this.head;
            let listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next;
            }

            console.log(listValue)
        }
    }


    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }


    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            console.log("the list is empty")
            return
        }
        const removedValue = this.tail.value
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return removedValue
    }

    removeFromStart() {
        if (this.isEmpty()) {
            console.log("the list is empty")
            return
        }

        const removedNode = this.head.value
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return removedNode;
    }

    printReverse() {
        if (this.isEmpty()) {
            console.log("the list is empty");
            return
        }
        let listValue = '';
        let curr = this.tail;
        while (curr) {
            listValue += `${curr.value} `;
            curr = curr.prev;
        }
        console.log(listValue);
    }

    reverse() {
        if (this.isEmpty()) {
            console.log("the list is empty");
            return
        }

        let curr = this.head;
        let temp;

        while (curr) {

            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        this.head = temp.prev
    }
}



const list = new DoublyLinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)


list.print()
console.log(list.removeFromStart())
console.log(list.removeFromEnd())

list.printReverse()

list.reverse()
list.print()