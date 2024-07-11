


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

    // insertion at the beginning of the linked list has constant time complexity O(1)
    // add node at the start of the linked list 
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            // if the list is not empty then add the reference of the first node to the new node and assign the head as new node
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    // print the elements of the linked list 
    print() {
        if (this.isEmpty()) {
            console.log("This is an empty list")
        } else {
            let curr = this.head;
            let listValue = "";
            while (curr) {
                listValue += `${curr.value} `;
                curr = curr.next
            }

            console.log(listValue)
        }
    }

    // insert a node at the end has linear time complexity O(n)
    // insert the node at the end of the linked list
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node;

        }
        this.size++
    }


    // insert a node at the given index
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("can't find the index please try again later ")
            return 
        } 

        if (index===0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++){
                curr=curr.next
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }

    // remove from the given index
    remove(index) {
        if (index < 0 || index > this.size) {
            console.log("The given index is invalid")
            return null
        }

        if (index === 0) {
            let curr = this.head;
            this.head = curr.next;
            this.size--;
            return curr.value
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++){
            curr=curr.next
        }
        let newNext = curr.next;
        curr.next = newNext.next;
        this.size--;
        return newNext.value;
    }

    // remove based on the value
    removeValue(value) {
        if (this.isEmpty()) {
            console.log("Array is empty no more elements to remove")
            return 
        }
       
        if (this.head.value===value) {
            this.head = this.head.next;
            this.size--;
            console.log("Node removed")
            return value
        }

        let prev = this.head;
        while (prev.next && prev.next.value != value) {
            prev=prev.next
        }

        if (prev.next)
        {
            let removeNode = prev.next;
            prev.next = removeNode.next;
            this.size--;
            return value
        }
        return null

        
    }
}




const list = new linkedList()

list.prepend(10)
list.prepend(90)
list.prepend(123)
list.prepend(1)

list.append(1000)
list.insert(555,1)
list.print()
console.log("Removed element is", list.remove(4))

console.log("removed node based on value is",list.removeValue(100))
list.print()



