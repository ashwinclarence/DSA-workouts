class TrieNode {
    constructor() {
        this.children = {}; // Each node has a map of children nodes
        this.isEndOfWord = false; // Flag to check if it's the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // The root node of the Trie
    }

    // Method to insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true; // Mark the end of a word
    }

    // Method to search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false; // If character is not found, word does not exist
            }
            node = node.children[char];
        }
        return node.isEndOfWord; // Check if the current node is the end of the word
    }

    // Method to check if any word in the Trie starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false; // If character is not found, no word with given prefix exists
            }
            node = node.children[char];
        }
        return true; // If all characters of prefix are found, return true
    }

    // Method to delete a word from the Trie
    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(node, word, depth) {
        if (!node) {
            return null;
        }

        // If end of word is reached
        if (depth == word.length) {
            if (node.isEndOfWord) {
                node.isEndOfWord = false;
            }

            // If node has no children, delete it
            if (Object.keys(node.children).length === 0) {
                return null;
            }

            return node;
        }

        const char = word[depth];
        node.children[char] = this.deleteHelper(node.children[char], word, depth + 1);

        // If the child node is deleted and the current node is not the end of another word
        if (node.children[char] === null) {
            delete node.children[char];

            if (Object.keys(node.children).length === 0 && !node.isEndOfWord) {
                return null;
            }
        }

        return node;
    }
}

// Example Usage
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: true
console.log(trie.startsWith("appl")); // Output: true
console.log(trie.startsWith("apx"));  // Output: false

trie.delete("app");
console.log(trie.search("app"));     // Output: false
console.log(trie.search("apple"));   // Output: true
