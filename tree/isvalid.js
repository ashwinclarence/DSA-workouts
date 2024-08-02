


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

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left);
            this.preOrder(root.right);
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
        let queue = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();

            console.log(curr.value);

            if (curr.left) {
                queue.push(curr.left);
            }

            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    delete(value) {
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(root, value) {
        if (root === null) {
            return root
        }

        if (value < root.value) {
            root.left=this.deleteHelper(root.left,value)
        } else if (value > root.value) {
            root.right = this.deleteHelper(root.right, value);
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
            root.right = this.deleteHelper(root.right, root.value);
        }
        return root
    }

    depth(root) {
        if (root === null) {
            return 0
        }

        return 1+Math.max(this.depth(root.left),this.depth(root.right))
    }


    validateBST(root, min = null, max = null) {
        if (root === null) {
            return true;
        }

        if (min !== null && root.value <= min) {
            return false;
        }

        if (max !== null && root.value >= max) {
            return false;
        }

        return this.validateBST(root.left, min, root.value) && this.validateBST(root.right, root.value, max);
    }

    min(root) {
        if (!root.left) {
            return root.value;
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

    closetValue(root, target) {
        let closet = root.value;

        while (root !== null) {
            if (Math.abs(target - closet) > Math.abs(target - root.value)) {
                closet = root.value;
            }
            root = (target < root.value) ? root.left : root.right;
        }
        return closet
    }
}

const bst = new Tree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


bst.levelOrder(bst.root)