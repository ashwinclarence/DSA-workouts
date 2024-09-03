

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

    insert(word) {
        
        let node = this.root;

        for (const ele of word) {
            if (!node.children[ele]) {
                node.children[ele] = new Node();
            }
            node = node.children[ele];
        }
        node.endOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (const char of word) {
            
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.endOfWord;
    }

    startsWith(word) {
        let node = this.root;

        for (const ele of word) {
            if (!node.children[ele]) {
                return false
            }
            node = node.children[ele];
        }
        return true;
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(node, word, index) {
        if (word.length === index) {
            if (!node.endOfWord) {
                return false;
            }
            node.endOfWord = false;

            return Object.keys(node.children).length === 0;
        }

        let char = word[index];

        if (!node.children[char]) {
            return false;
        }

        let remove = this.deleteHelper(node.children[char], word, index + 1);

        if (remove) {
            delete node.children[char];

            return Object.keys(node.children).length === 0 && !node.endOfWord;
        }
    }

    checkWord(word) {
        let node = this.root;

        for (const ele of word) {
            if (!node.children[ele]) {
                return []
            }
            node = node.children[ele];
        }

        let result = [];

        this.collectWords(node, word, result)
        
        return result;
    }


    collectWords(node, word, result) {
        if (node.endOfWord) {
            result.push(word)
        }

        for (const ele in node.children) {
             this.collectWords(node.children[ele],word+ele,result)
        }

    }

    
}

const trie = new Trie();

trie.insert("MANAGER")
trie.insert("MANGO")
trie.insert("MAN")
trie.insert("HELLO")

console.log(trie.checkWord("M"))

