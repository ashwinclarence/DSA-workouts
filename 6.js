


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
            this.insertHelper(this.root, node);
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

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (value === root.value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    delete(value) {
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteHelper(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteHelper(root.right, value);
        } else {
            
            if (!root.right && !root.left) {
                return null;
            }

            if (!root.right) {
                return root.left;
            } else if (!root.left) {
                return root.right;
            }

            root.value = this.min(root.right);
            root.right = this.deleteHelper(root.right, root.value);
        }
        return root;
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
            return this.max(root.right);
        }
    }

    inOrder(root,arr=[]) {
        if (root) {
            this.inOrder(root.left,arr)
            arr.push(root.value);
            this.inOrder(root.right,arr)
        }
        return arr;
    }

    preOrder(root, arr = []) {
        if (root) {
            arr.push(root.value);
            this.preOrder(root.left,arr);
            this.preOrder(root.right, arr);
        }
        return arr;
    }

    postOrder(root, arr = []) {
        if (root) {
            this.postOrder(root.left, arr);
            this.postOrder(root.right, arr);
            arr.push(root.value);
        }
        return arr
    }

    validBST(root, min = null, max = null) {
        
        if (root === null) {
            return true;
        }

        if (min !== null && root.value <= min) {
            return false;
        }

        if (max !== null && root.value >= max) {
            return false
        }

        return (this.validBST(root.left,min,root.value)&&this.validBST(root.right,root.value,max))
    }

    closest(root, target) {
        let close = root.value;

        while (root !== null) {
            if (Math.abs(target - close) > Math.abs(target - root.value)) {
                close = root.value;
            }
            root = target < root.value ? root.left : root.right;
        }
        return close
    }

    depth(root) {
        if (root === null) {
            return 0
        }
        return 1+Math.max(this.depth(root.left),this.depth(root.right))
    }
}

const bst = new Tree();

bst.insert(1)
bst.insert(6)
bst.insert(3)
bst.insert(10)
bst.insert(5)


console.log(bst.depth(bst.root))