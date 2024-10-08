


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


    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        } else {
            let curr = this.head;
            let listValue = "";
            while (curr) {
                listValue += `${curr.value} `
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
        }
        else {
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


    removeFromFront() {
        if (this.isEmpty()) {
            console.log("List is empty")
            return;
        }

        let removeValue = this.head;
        this.head = removeValue.next;
        this.size--;
        return removeValue.value
    }


    removeFromEnd() {
        if (this.isEmpty()) {
            console.log("List is empty")
            return;
        }

        let removeValue = this.tail.value;
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
        return removeValue
    }

}


const list = new LinkedList();

list.prepend(100)
list.prepend(200)
list.prepend(300)


list.append(1)
list.append(2)
list.append(3)


list.print()
console.log(list.removeFromFront())


console.log(list.removeFromEnd())


list.print()