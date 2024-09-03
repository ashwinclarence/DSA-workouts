

class Node{
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
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

        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return true
    }

    delete(word) {
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(node, word, index) {
        
        if (word.length === index) {
            if (!node.isEndOfWord) {
                return false
            }
            node.isEndOfWord = false;

            return Object.keys(node.children).length===0
        }

        let char = word[index];

        if (!node.children[char]) {
            return false
        }

        let shouldDeleteChild = this.deleteHelper(node.children[char], word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];

            return Object.keys(node.children).length===0 && !node.isEndOfWord
        }
        return false
    }
}


const trie = new Trie();

trie.insert("HELLO")
trie.insert("HELMET")
trie.insert("MANGO")
trie.insert("MAN")


console.log(trie.search("MAN"))
console.log(trie.search("HELLO"))

console.log(trie.startsWith("A"))

trie.delete("MAN")
console.log(trie.search("MAN"))