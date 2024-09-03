


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
                return false
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
            return Object.keys(node.children).length===0
        }

        let char = word[index];

        if (!node.children[char]) {
            return false;
        }

        let deleteValue = this.deleteHelper(node.children[char], word, index + 1);

        if (deleteValue) {
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

        for (let ele in node.children) {
            count += this.countHelper(node.children[ele]);
        }

        return count;
    }

    replace(oldWord, newWord) {
        this.delete(oldWord);
        this.insert(newWord)
    }
}



const trie = new Trie();

trie.insert("MANGO")
trie.insert("ORANGE")
trie.insert("MAN")
trie.insert("MANAger")

console.log(trie.search("MANGO"))
console.log(trie.search("MANG"))
console.log(trie.startsWith("MA"))
console.log(trie.startsWith("ORA"))

trie.delete("MANGO")
console.log(trie.search("MANGO"))

console.log(trie.count())
console.log(trie.search("SHE"))
trie.replace("MAN","SHE")
console.log(trie.search("SHE"))
console.log(trie.search("MAN"))