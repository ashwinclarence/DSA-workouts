

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
        const node=new Node(value)
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
                this.insertHelper(root.left,node)
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

    
    levelOrder() {
        let queue = [];
        
        queue.push(this.root)
        
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
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(root, value) {
        if (root === null) {
            return root
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
                return root.right
            } else if (!root.right) {
                return root.left
            }

            root.value = this.min(root.right);
            root.right=this.deleteHelper(root.right,root.value)
        }
        return root
    }

    //height of a tree is to count from the root to until it shows null to the end(last or final node)
    depth(root) {
        if (root === null) {
            return 0;
        }

        return 1+Math.max(this.depth(root.left),this.depth(root.right))
    }

    //depth of a  specific or given node (from the given data until the root)
    depthOfNode(root,data,depth=0){
        if(root===null) return -1; //node  not found
        if(root.value===data) return depth; //return depth of the node here
        if(data<root.value) return depthNode(root.left, data, depth+1);
        if(data>root.value) return depthNode(root.right, data, depth+1);
    }

}

const bst = new Tree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.depth(bst.root))
const nodeDepth = bst.depthOfNode(bst.root, 7);
console.log('Depth of node with value 7:', nodeDepth); 
