


class Node{
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class Tree{
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
            this.insertValue(this.root, node);
        }
    }

    insertValue(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertValue(root.left,node)
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertValue(root.right,node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (value === root.value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    } 

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}


const bst = new Tree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root, 109))


bst.postOrder(bst.root)