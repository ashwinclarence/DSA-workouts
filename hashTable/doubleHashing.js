class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    // Primary hash function
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    // Secondary hash function for double hashing
    hash2(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return (7 - (total % 7)); // Step size is calculated as (7 - (hash % 7))
    }
  
    // Set key-value pair using double hashing
    set(key, value) {
      let index = this.hash(key);
      const stepSize = this.hash2(key);
      while (this.table[index] && this.table[index][0] !== key) {
        index = (index + stepSize) % this.size;
      }
      this.table[index] = [key, value];
    }
  
    // Get value by key using double hashing
    get(key) {
      let index = this.hash(key);
      const stepSize = this.hash2(key);
      while (this.table[index]) {
        if (this.table[index][0] === key) {
          return this.table[index][1];
        }
        index = (index + stepSize) % this.size;
      }
      return undefined;
    }
  
    // Remove key-value pair using double hashing
    remove(key) {
      let index = this.hash(key);
      const stepSize = this.hash2(key);
      while (this.table[index]) {
        if (this.table[index][0] === key) {
          this.table[index] = undefined;
          return;
        }
        index = (index + stepSize) % this.size;
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
  const table = new HashTable(10);
  table.set("name", "Bruce");
  table.set("age", 25);
  table.display();
  
  console.log(table.get("name"));  // Output: Bruce
  table.set("mane", "Clark");     // This should cause a collision with "name"
  table.set("name", "Diana");     // Overwrite "Bruce" with "Diana"
  console.log(table.get("mane")); // Output: Clark
  table.remove("name");
  table.display();
  