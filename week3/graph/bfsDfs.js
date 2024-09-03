

class Graph {
    constructor() {
        this.adjacentList = {};
    }

    insertVertex(value) {
        if (!this.adjacentList[value]) {
            this.adjacentList[value] = new Set();
        }
    }

    insertEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.insertVertex(vertex1);
        }

        if (!this.adjacentList[vertex2]) {
            this.insertVertex(vertex2);
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            return `Can't find the ${vertex1}`;
        }
        if (!this.adjacentList[vertex2]) {
            return `Can't find the ${vertex2}`;
        }
        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1));
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return;
        }

        for (const adjacentVertex of this.adjacentList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacentList[vertex];
    }

    display() {
        for (const vertex in this.adjacentList) {
            console.log(vertex + " => " + [...this.adjacentList[vertex]]);
        }
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = new Set();
        let currentVertex;

        visited.add(start);

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacentList[currentVertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    dfsRecursive(start) {
        const result = [];
        const visited = new Set();
        const adjacencyList = this.adjacentList;

        function dfs(vertex) {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            });
        }

        dfs(start);
        return result;
    }

    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = new Set();
        let currentVertex;

        visited.add(start);

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacentList[currentVertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}

// Example usage:
const graph = new Graph();

graph.insertVertex("A");
graph.insertVertex("B");
graph.insertVertex("C");
graph.insertVertex("D");
graph.insertVertex("E");
graph.insertVertex("F");

graph.insertEdge("A", "B");
graph.insertEdge("A", "C");
graph.insertEdge("B", "D");
graph.insertEdge("C", "E");
graph.insertEdge("D", "E");
graph.insertEdge("D", "F");
graph.insertEdge("E", "F");

console.log("Graph display:");
graph.display();

console.log("BFS traversal from A:", graph.bfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log("DFS Recursive traversal from A:", graph.dfsRecursive("A")); // Output: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log("DFS Iterative traversal from A:", graph.dfsIterative("A")); // Output: [ 'A', 'C', 'E', 'F', 'D', 'B' ]
