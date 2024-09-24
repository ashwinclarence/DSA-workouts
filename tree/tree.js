


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
        let node = new Node(value);

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

    search(root,value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
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
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    levelOrder() {
        let queue = [this.root];
        let result = [];
        while (queue.length) {
            let curr = queue.shift();
            result.push(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        console.log(result);
    }

    levelSum() {
        if (!this.root) return []; // Handle empty tree

        let queue = [this.root];
        let levelSums = {}; // Array to store the sums of each level
        let level = 1;

        while (queue.length) {
            let currentLevelSum = 0; // Initialize the sum for the current level

            for (let i = 0; i < queue.length; i++) {
                let curr = queue.shift(); // Dequeue the front node
                currentLevelSum += curr.value; // Add the node's value to the level sum

                if (curr.left) {
                    queue.push(curr.left); // Enqueue left child
                }
                if (curr.right) {
                    queue.push(curr.right); // Enqueue right child
                }
            }

            levelSums[level] = currentLevelSum; // Store the sum of the current level in levelSums
            level++;
        }

        console.log(levelSums); // Output the sums of each level
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
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteHelper(root.right, root.value);
        }
        return root;
    }

    findSecondLargest() {
        let parent = null;
        let curr = this.head;

        while (curr.right) {
            parent = curr;
            curr = curr.right;
        }

        if (curr.left) {
            curr = curr.left;
            while (curr.right) {
                curr = curr.right;
            }
            return curr.value;
        }
        return parent.value;
    }
}


let bst = new Tree();

bst.insert(1)
bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(2)
bst.insert(4)

bst.levelSum(bst.root)
// bst.inOrder(bst.root);
bst.levelOrder();