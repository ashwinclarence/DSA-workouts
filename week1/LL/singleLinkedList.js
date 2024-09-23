


class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
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
        }
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return "nothing to remove as the linked list is empty";
        }
        let removedNode;
        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        }
        removedNode = curr.next;
        curr.next = null;
        this.size--;
        return removedNode.value;
    }

    removeFromStart() {
        if (this.isEmpty()) {
            return "nothing to remove from start as the linked list is empty";
        }
        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode.value;
    }

    removeUsingIndex(index) {
        if (this.isEmpty() || index < 1 || index > this.size) {
            return "invalid index";
        }
        let removedNode;
        if (index === 1) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            
            let curr = this.head;
            for (let i = 1; i < index-1; i++){
                curr = curr.next;
            }
            removedNode = curr.next;
            curr.next = curr.next.next;
        }
        this.size--;
        return removedNode.value;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
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

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

const ll = new LinkedList();


ll.append(1)
ll.prepend(2)
ll.prepend(3)
ll.prepend(4)
ll.prepend(5)
ll.prepend(8)
ll.prepend(9)
ll.prepend(10)

console.log(ll.removeFromEnd());
console.log(ll.removeFromStart());
ll.display()
console.log(ll.removeUsingIndex(2));

console.log(ll.search(4));


ll.display()
ll.reverse()
ll.display()




