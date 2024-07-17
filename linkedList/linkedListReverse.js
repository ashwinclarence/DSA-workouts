


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
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
            console.log("linked list is empty")
        } else {
            let listValue=''
            let curr = this.head;
            while (curr) {
                listValue += `${curr.value} `;
                curr=curr.next
            }
            console.log(listValue);
        }
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
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
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            const curr = this.head;
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
            return 
        }

        if (index === 0) {
            let curr = this.head;
            this.head = curr.next;
            this.size--;
            return curr.value;
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++){
            curr = curr.next;
        } 

        let removeNode = curr.next;
        curr.next = removeNode.next;
        this.size--;
        return removeNode.value;
    }



    removeValue(value) {
        if (this.isEmpty()) {
            console.log("list is empty")
            return 
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value
        }

        let curr = this.head;
        while (curr.next && curr.next.value != value) {
            curr = curr.next;
        }

        if (curr.next) {
            let removeNode = curr.next;
            curr.next = removeNode.next;
            this.size--;
            return value;
        }
        return null

    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }

        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i
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
        this.head=prev
    }


}


const list = new linkedList();
list.prepend(1)
list.prepend(2)
list.prepend(5)
list.prepend(10)

list.append(100)
list.append(200)
list.append(300);

list.print()
// console.log(list.remove(1))
// console.log(list.removeValue(1004))
// console.log(list.search(11))


list.reverse()
list.print()