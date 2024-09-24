

class Node{
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}


class Trie{
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        let node = this.root;

        for (const ele of value) {
            if (!node.children[ele]) {
                node.children[ele] = new Node();
            }
            node = node.children[ele];
        }
        node.endOfWord = true;
    }


    search(value) {
        let node = this.root;

        for (const ele of value) {
            if (!node.children[ele]) {
                return false;
            }
            node = node.children[ele];
        }
        return node.endOfWord;
    }

    startsWith(value) {
        let node = this.root;

        for (const ele of node) {
            if (!node.children[ele]) {
                return false;
            }
            node = node.children[ele];
        }
        return true;
    }

    
}