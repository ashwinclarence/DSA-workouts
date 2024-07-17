class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class linkedList{
    constructor() {
        this.head = null;
        this.size=0
    }

    isEmpty() {
        return this.size===0
    } 
    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
            console.log("Linked list is empty")
        } else {
            let curr = this.head;
            let listValue = '';
            while (curr) {
                listValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValue);

        }
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head=node
        } else {
            node.next = this.head;
            this.head = node;
        } 
        this.size++;

    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head=node
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }


    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index")
            return 
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++){
                prev=prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return 
        }
        
        if (index === 0) {
            let curr = this.head;
            this.head = curr.next;
            this.size--;
            return curr.value
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++){
            curr = curr.next;
        }
        let nextNode = curr.next;
        curr.next = nextNode.next;
        this.size--;
        return nextNode.value
   }

    removeValue(value) {
        if (this.isEmpty()) {
            console.log("Linked list is empty")
            return 
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }

        let prev = this.head;
        while (prev.next && prev.next.value != value) {
            prev = prev.next;
        }
        if (prev.next) {
            let nextNode = prev.next;
            prev.next = nextNode.next;
            return value
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
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1
    }


    

}



const list = new linkedList();

list.prepend(1000)
list.prepend(1)
list.prepend(10)
list.prepend(800)

list.append(400)
list.append(6)
list.append(45)

// list.insert(444, 2)
list.print()

// console.log("removed element is ",list.remove(6))
// console.log("remove node by value ",list.removeValue(800))
console.log(list.search(6))
list.print()