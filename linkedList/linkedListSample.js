

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
            console.log("The list is empty");
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
            this.head = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index");
            return;
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)

            let curr = this.head;
            while (curr.next && curr.next.value != value) {
                curr = curr.next;
            }

            node.next = curr.next;
            curr.next = node;
            this.size++;

        }
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index")
            return;
        }

        if (index === 0) {
            let removedNode = this.head;
            this.head = removedNode.next;
            this.size--;
            return removedNode.value
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        let removedNode = curr.next;
        curr.next = removedNode.next;
        this.size--;
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            console.log("List is empty")
            return
        }

        if (this.head.value === value) {
            this.head = this.head.value;
            this.size--;
            return value
        }

        let curr = this.head;
        while (curr.next && curr.next.value != value) {
            curr = curr.next
        }

        if (curr.next) {
            let removeValue = curr.next;
            curr.next = removeValue.next;
            this.size--;
            return value;
        }
        return -1
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1
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


const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);

list.append(100)
list.append(200)
list.append(300)
list.append(400)


list.print()
// console.log(list.remove(3))
// console.log(list.removeValue(1000))
// console.log(list.search(40))

list.reverse()

list.print()