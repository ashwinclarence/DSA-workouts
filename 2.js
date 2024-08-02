


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
            node = node.children[char];
        }
        return node.endOfWord
    }

    startsWith(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return false
            }
            node=node.children[char]
        }
        return true
    }

    delete(word) {
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(node, word, index) {
        if (word.length === index) {
            if (!node.endOfWord) {
                return false
            }
            node.endOfWord = false

            return Object.keys(node.children).length===0
        }

        let char = word[index];

        if (!node.children[char]) {
            return false
        }

        let remove = this.deleteHelper(node.children[char], word, index + 1);

        if (remove) {
            delete node.children[char];

            return Object.keys(node.children).length===0 && !node.endOfWord
        }
        return false
    }

    count() {
        return this.countHelper(this.root)
    }

    countHelper(node) {
        let count = 0;

        if (node.endOfWord) {
            count++;
        }

        for (const ele in node.children) {
            count+=this.countHelper(node.children[ele])
        }
        return count
    }


    findAllWords(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char];
        }

        let result = []
        
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

trie.insert("MANGO")
trie.insert("MAN")
trie.insert("MANAGER")
trie.insert("APPLE")

console.log(trie.search("MANGO"))

console.log(trie.startsWith("A"))

console.log(trie.count())

trie.delete("MANGO")
console.log(trie.count())

console.log(trie.findAllWords("M"))