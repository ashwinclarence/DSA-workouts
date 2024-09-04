class Node {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
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
        return node.endOfWord;
    }

    startsWith(prefix) {
        let node = this.root;

        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
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

        let shouldDeleteChild = this.deleteHelper(node.children[char], word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.endOfWord;
        }

        return false;
    }

    count() {
        return this.countHelper(this.root);
    }

    countHelper(node) {
        let count = 0;

        if (node.endOfWord) {
            count++;
        }

        for (const char in node.children) {
            count += this.countHelper(node.children[char]);
        }

        return count;
    }

    replace(oldWord, newWord) {
        this.delete(oldWord);
        this.insert(newWord);
    }

    findAllWords(prefix) {
        let node = this.root;

        for (const char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }

        let result = [];
        this.collectWords(node, prefix, result);
        return result;
    }

    collectWords(node, prefix, result) {
        if (node.endOfWord) {
            result.push(prefix);
        }

        for (const char in node.children) {
            this.collectWords(node.children[char], prefix + char, result);
        }
    }
}

// Usage
const trie = new Trie();

trie.insert("MANGO");
trie.insert("ORANGE");
trie.insert("MAN");
trie.insert("MANAGER");

console.log(trie.search("MANGO"));         // true
console.log(trie.search("MANG"));          // false
console.log(trie.startsWith("MA"));        // true
console.log(trie.startsWith("ORA"));       // true

trie.delete("MANGO");
console.log(trie.search("MANGO"));         // false

console.log(trie.count());                 // 3
trie.replace("MAN", "SHE");
console.log(trie.search("SHE"));           // true
console.log(trie.search("MAN"));           // false

console.log(trie.findAllWords("MA"));      // ["MANAGER"]
