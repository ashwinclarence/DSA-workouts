



class HashTable{
    constructor(limit) {
        this.table = new Array(limit);
        this.size = limit;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log(i,this.table[i]);
                
            }
        }
    }
}


const hash = new HashTable(20);

hash.set('name', "ashwin");
hash.set('place', "trivandrum");
hash.set('age', 20); 

console.log(hash.get('name'));

hash.remove('age')

hash.display()