



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
            this.insertValue(this.root,node)
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
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right,value)
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

    levelOrder() {
        const queue = [];

        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);

            if (curr.left) {
                queue.push(curr.left)
            }

            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root=this.deleteNode(this.root,value)
    }


    deleteNode(root, value) {
        if (root===null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // if the node is a leaf node;
            if (!root.left && !root.right) {
                return null;
            }

            // if the node only has a single node
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left
            }

            // if the node has more two nodes
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);

        }
        return root
    }
}



const bst = new Tree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root, 900))

// bst.levelOrder()

bst.delete(10)
bst.levelOrder()
// bst.postOrder(bst.root)




