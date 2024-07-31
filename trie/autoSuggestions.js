



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
        return true;
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0);
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

        let deleteEle = this.deleteHelper(node.children[char], word, index + 1);

        if (deleteEle) {
            delete node.children[char];

            return Object.keys(node.children).length===0 && !node.endOfWord
        }
    }

    count() {
        return this.counterHelper(this.root);
    }

    counterHelper(node) {
        let count = 0;

        if (node.endOfWord) {
            count++;
        }

        for (const ele in node.children) {
            count+=this.counterHelper(node.children[ele])
        }
        return count;
    }

    replace(oldword, newWord) {
        this.delete(oldword);
        this.insert(newWord);
    }
    

    findAllWords(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char];
        }
        let result = [];

        this.collectWords(node, word, result)
        
        return result
    }

    collectWords(node, word, result) {
        
        if (node.endOfWord) {
            result.push(word);
        }

        for (const char in node.children) {
            this.collectWords(node.children[char],word+char,result)
        }
    }
}


const trie = new Trie();

trie.insert("CAT")
trie.insert("CAR")
trie.insert("CATERPILLER")
console.log(trie.count())

console.log(trie.findAllWords("C"))

