class QuadraticProbingHashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
      this.c1 = 1; // Constant c1
      this.c2 = 3; // Constant c2
    }
  
    // Primary hash function
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    // Set key-value pair using quadratic probing
    set(key, value) {
      let index = this.hash(key);
      let i = 1;
      while (this.table[index] && this.table[index][0] !== key) {
        index = (this.hash(key) + this.c1 * i + this.c2 * i * i) % this.size;
        i++;
      }
      this.table[index] = [key, value];
    }
  
    // Get value by key using quadratic probing
    get(key) {
      let index = this.hash(key);
      let i = 1;
      while (this.table[index]) {
        if (this.table[index][0] === key) {
          return this.table[index][1];
        }
        index = (this.hash(key) + this.c1 * i + this.c2 * i * i) % this.size;
        i++;
      }
      return undefined;
    }
  
    // Remove key-value pair using quadratic probing
    remove(key) {
      let index = this.hash(key);
      let i = 1;
      while (this.table[index]) {
        if (this.table[index][0] === key) {
          this.table[index] = undefined;
          return;
        }
        index = (this.hash(key) + this.c1 * i + this.c2 * i * i) % this.size;
        i++;
      }
    }
  
    // Display the hash table
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  // Example Usage
  const table = new QuadraticProbingHashTable(10);
  table.set("name", "Bruce");
  table.set("age", 25);
  table.display();
  
  console.log(table.get("name"));  // Output: Bruce
  table.set("mane", "Clark");     // This should cause a collision with "name"
  table.set("name", "Diana");     // Overwrite "Bruce" with "Diana"
  console.log(table.get("mane")); // Output: Clark
  table.remove("name");
  table.display();
  