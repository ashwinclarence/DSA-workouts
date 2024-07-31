



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

    startsWith(prefix) {
        let node = this.root;

        for (const char of prefix) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return true;
    }

    endsWith(suffix) {
        
        let reverseSuffix = suffix.split("").reverse().join("");

        return this.startsWith(reverseSuffix);
    }

    delete(word) {
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(node, word, index) {
        if (word.length === index) {
            if (!node.endOfWord) {
                return false
            }
            node.endOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        let char = word[index];
        if (!node.children[char]) {
            return false
        }

        let deleteItem = this.deleteHelper(node.children[char], word, index + 1)
        
        if (deleteItem) {
            delete node.children[char];

            return Object.keys(node.children).length===0 && !node.endsWith
        }
        return false;
    }


    count() {
        return this.counterHelper(this.root)
    }

    counterHelper(node) {
        
        let count = 0;

        if (node.endOfWord) {
            count++;
        }

        for (const ele in node.children) {
            count+=this.counterHelper(node.children[ele])
        }

        return count
    }

    replace(newWord, oldWord) {
        this.delete(oldWord);
        this.insert(newWord)
    }
}




const trie = new Trie();

trie.insert("MANGO")
trie.insert("MAN")
trie.insert("MANAGER")


console.log(trie.search("MAN"))
console.log(trie.startsWith("M"))
console.log(trie.startsWith("A"))

trie.delete("MAN")
console.log(trie.search("MAN"))
console.log(trie.count())
