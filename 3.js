


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
                this.insertHelper(root.left,node)
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertHelper(root.right,node)
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
                return this.search(root.left,value)
            } else {
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
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
            console.log(root.value)
        }
    }

    levelOrder() {
        let queue = [];

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
            return root.value;
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root=this.deleteHelper(this.root,value)
    }


    deleteHelper(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left=this.deleteHelper(root.left,value)
        } else if (value > root.value) {
            root.right = this.deleteHelper(root.right,value)
        } else {
            
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right=this.deleteHelper(root.right,root.value)
        }
    }
}