


class Node{
    constructor() {
        this.children = {};
        this.endOfWord=false
    }
}

class Trie{
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.endOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node=node.children[char]
        }
        return node.endOfWord
    }

    startsWith(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node=node.children[char]
        }
        return true
    }
}


const trie = new Trie();

trie.insert("MANGO");
trie.insert("MANAGER")
trie.insert("MAN")
trie.insert("HELLO")


console.log(trie.search("MA"))

console.log(trie.startsWith("M"))