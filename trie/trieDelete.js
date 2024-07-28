


class TrieNode{
    constructor() {
        this.children = {};
        this.end=false
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (const ele of word) {
            if (!node.children[ele]) {
                node.children[ele] = new TrieNode();
            }
            node = node.children[ele];
        }
        node.end = true;
    }

    search(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++){
            
            let ele = word[i];

            if (!node.children[ele]) {
                return false
            }

            node=node.children[ele]
        }
        return node.end
    }

    startsWith(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++){
            let ele = word[i];

            if (!node.children[ele]) {
                return false
            }

            node = node.children[ele]
        }
        return true
    }
}

const trie = new Trie();

trie.insert("ASHWIN");
trie.insert("ASHLIN");

console.log(trie.search("ASHLINH"))


console.log(trie.startsWith("ASHM"))