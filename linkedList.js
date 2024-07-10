


class Node{

    constructor(value) {
        this.value = value;
        this.next=null
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

    prepend(value) {
        const node = new Node(value)
        
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
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
}


const obj1 = new linkedList()

obj1.prepend(1)
obj1.prepend(20)
obj1.prepend(500)

obj1.print()