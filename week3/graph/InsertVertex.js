class Graph {
    constructor() {
        this.adjacentList = {};
    }

    insertEdge(value) {
        if (!this.adjacentList[value]) {
            this.adjacentList[value] = new Set();
        }
    }

    insertVertex(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.insertEdge(vertex1)
        }

        if (!this.adjacentList[vertex2]) {
            this.insertEdge(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    hashEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "no such vertex"
        }

        return this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1)
    }


    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return "there is no vertex";
        }

        for (let ele of this.adjacentList[vertex]) {
            this.removeEdge(vertex, ele);
        }

        delete this.adjacentList[vertex];
    }

    degree(vertex) {
        if (!this.adjacentList[vertex]) {
            return null;
        }

        return this.adjacentList[vertex].size;
    }

    display() {
        for (const ele in this.adjacentList) {
            console.log(ele + "=>" + [...this.adjacentList[ele]]);
        }
    }

    bfs(start) {
        let queue = [start];
        let result = [];
        let visited = new Set();
        let currentVertex;
        visited.add(start);

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            for (const ele of this.adjacentList[currentVertex]) {
                if (!visited.has(ele)) {
                    visited.add(ele);
                    queue.push(ele);
                }
            }
            
        }

        return result;
    }

    secondNode() {
        let keys = Object.keys(this.adjacentList);
        if (keys.length < 2) {
            return null;
        }


    }

    secondLargest() {
        let keys = Object.keys(this.adjacentList);
        if (keys.length < 2) {
            return null;
        }
        if (typeof (keys[0]) === 'string') {
            keys.sort((a, b) => b.localeCompare(a));
            
        } else {
            keys.sort((a, b) => b - a);
        }
        
       return [keys[1]]
    }


    shortestPath(start) {
        let stack = [start];
        let currentVertex;
        let visited = new Set();
        

    }

}


const graph = new Graph();

graph.insertVertex(1,2)
graph.insertVertex(2,4)
graph.insertVertex(3,4)

graph.display()
    
console.log(graph.secondLargest());
console.log(graph.bfs(1));
