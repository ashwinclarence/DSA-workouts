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
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
            node.prev = curr;
        }
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    search(value) {
        if (this.isEmpty()) {
            return "linked list is empty"
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

    removeFromEnd() {
        if (this.isEmpty()) {
            return "linked list is empty";
        }
        let removedNode;
        if (this.size === 1) {
            removedNode = this.head;
            this.head = null;
        } else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            removedNode = curr.next;
            curr.next.prev = null;
            curr.next = null;
        }
        this.size--;
        return removedNode.value;
    }

    removeFromStart() {
        if (this.isEmpty()) {
            return "linked list is empty";
        }
        let removedNode = this.head;
        if (this.size === 1) {
            this.head = null;
        } else {
            let newHead = this.head.next;
            newHead.prev = null;
            this.head = this.head.next;
        }
        this.size--;
        return removedNode.value;
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


let dl = new LinkedList();

dl.append(1)
dl.append(2)
dl.append(3)
dl.append(4)
dl.append(5)

dl.prepend(6)
dl.prepend(7)
dl.prepend(8)

dl.display()
console.log(dl.removeFromEnd());
console.log(dl.removeFromStart());



dl.display()