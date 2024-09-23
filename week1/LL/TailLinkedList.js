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
        return this.size === 0;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail=node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    search(value) {
        if (this.isEmpty()) {
            return false;
        }
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    display() {
        if (this.isEmpty()) {
            console.log("linked list is empty");
            return;
        }
        let list = [];
        let curr = this.head;
        while (curr) {
            list.push(curr.value);
            curr = curr.next;
        }
        console.log(list);
    }
}


const tl = new LinkedList();

tl.append(1)
tl.append(2)
tl.append(3)
tl.append(4)
tl.append(5)

tl.prepend(7)
tl.prepend(8)
tl.prepend(9)
tl.prepend(10)


tl.display()

console.log(tl.search(44));
console.log(tl.search(4));

