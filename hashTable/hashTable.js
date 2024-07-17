


class HashTable{

    constructor(limit) {
        this.table = new Array(limit);
        this.size = limit;
    }


    hash(key) {
        let total = 0;
        for (let i = 0; i < this.size; i++){
            total+=key.charCodeAt(i)
        }

        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        let index = this.hash(key);

        return this.table[index]
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
               console.log(i,this.table[i])
           }
        }
    }
}


const t = new HashTable(100);
t.set('name',"ashwin")
t.set('age', 23)
t.display()