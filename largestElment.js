


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


    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            this.insertHelper(this.root,node)
        }
    }

    insertHelper(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertHelper(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertHelper(root.right, node);
            }
        }
    }


    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right)
        }
    }

    levelOrder() {
        let queue = []
        
        queue.push(this.root)

        while (queue.length) {
            let curr = queue.shift()
            
            console.log(curr.value)

            if (curr.left) {
                queue.push(curr.left)
            }

            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
}


const bst = new Tree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.levelOrder()
console.log("max value is ",bst.max(bst.root))