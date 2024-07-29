class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        word = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        word = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        prefix = prefix.toLowerCase();
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    delete(word) {
        this.deleteWord(this.root, word.toLowerCase(), 0);
    }

    deleteWord(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false; // Word not found
            }
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0; // If true, delete this node
        }

        let char = word[index];
        let childNode = node.children[char];
        if (!childNode) {
            return false; // Word not found
        }

        let shouldDeleteChild = this.deleteWord(childNode, word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }

        return false;
    }

    countWords() {
        return this.countWordsHelper(this.root);
    }

    countWordsHelper(node) {
        let count = 0;
        if (node.isEndOfWord) {
            count++;
        }
        for (let child in node.children) {
            count += this.countWordsHelper(node.children[child]);
        }
        return count;
    }

    replace(oldWord, newWord) {
        this.delete(oldWord);
        this.insert(newWord);
    }
}

// Create an instance of the Trie class
const trie = new Trie();

// Insert words into the Trie
trie.insert("Apple");
trie.insert("App");
trie.insert("Application");

// Test the countWords method
console.log(trie.countWords()); // 3

// Test the replace method
trie.replace("app", "apricot");
console.log(trie.countWords()); // 3

// Test the search method
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.search("apricot")); // true

// Test the delete method
trie.delete("apple");
console.log(trie.countWords()); // 2

// Test the startsWith method
console.log(trie.startsWith("appl")); // true
console.log(trie.startsWith("apri")); // true
