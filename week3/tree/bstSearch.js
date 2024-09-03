

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class Tree {

    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertValue(this.root, node)
        }
    }

    insertValue(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertValue(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertValue(root.right, node)
            }
        }
    }


    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
}



const bst = new Tree();

bst.insert(1)
bst.insert(10)
bst.insert(2)
bst.insert(20)
bst.insert(3)
bst.insert(6);


console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,100))
console.log(bst.search(bst.root,1))

