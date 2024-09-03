class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
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
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
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

    delete(value) {
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(root, value) {
        if (root === null) {
            return null;
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

    depth(root) {
        if (root === null) {
            return 0;
        } else {
            return 1 + Math.max(this.depth(root.left), this.depth(root.right));
        }
    }

    closestValue(root, target) {
        let closest = root.value;
        while (root !== null) {
            if (Math.abs(target - closest) > Math.abs(target - root.value)) {
                closest = root.value;
            }
            root = (target < root.value) ? root.left : root.right;
        }
        return closest;
    }

    findSecondLargest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
            return null; // No second largest element
        }

        let current = this.root;
        let parent = null;

        // Find the largest element
        while (current.right) {
            parent = current;
            current = current.right;
        }

        // If the largest has a left subtree, find the largest in that subtree
        if (current.left) {
            current = current.left;
            while (current.right) {
                current = current.right;
            }
            return current.value;
        }

        // If no left subtree, the parent is the second largest
        return parent.value;
    }

    isValidBST(root, min = null, max = null) {
        if (root === null) return true;
        if (min !== null && root.value <= min) return false;
        if (max !== null && root.value >= max) return false;
        return this.isValidBST(root.left, min, root.value) && this.isValidBST(root.right, root.value, max);
    }
}

const bst = new Tree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Depth:", bst.depth(bst.root));
console.log("Is valid BST:", bst.isValidBST(bst.root));
console.log("Closest value to 6:", bst.closestValue(bst.root, 6));
console.log("Second largest value:", bst.findSecondLargest());
bst.delete(5);
console.log("Is valid BST after deletion:", bst.isValidBST(bst.root));
console.log("Depth after deletion:", bst.depth(bst.root));
