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
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Create an instance of the Trie class
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("app");
trie.insert("application");

// Test the search method
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("application")); // true
console.log(trie.search("appl")); // false
console.log(trie.search("banana")); // false

// Test the startsWith method
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("appl")); // true
console.log(trie.startsWith("banana")); // false
