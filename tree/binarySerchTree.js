



class Node{

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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

}



const bst = new Tree();


bst.insert(1)
bst.insert(3)
bst.insert(6)
bst.insert(2)
bst.insert(4)
bst.insert(10)


