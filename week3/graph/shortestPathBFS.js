class Graph {
    constructor() {
        this.adjacentList = {};
    }

    insertVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set();
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

    shortestPath(start, target) {
        let queue = [start];
        let visited = new Set();
        let distances = { [start]: 0 }; // Store the distance from start to each vertex
        let previous = {}; // To reconstruct the path

        visited.add(start);

        while (queue.length) {
            let currentVertex = queue.shift();

            if (currentVertex === target) {
                return this._reconstructPath(previous, start, target);
            }

            this.adjacentList[currentVertex].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    distances[neighbor] = distances[currentVertex] + 1; // Increment distance
                    previous[neighbor] = currentVertex; // Track the path
                }
            });
        }

        return []; // If target is not reachable from start
    }

    _reconstructPath(previous, start, target) {
        let path = [];
        let current = target;

        while (current) {
            path.unshift(current);
            current = previous[current];
        }

        return path[0] === start ? path : []; // Return the path if it starts with the start vertex
    }
}

// Example Usage
const graph = new Graph();
graph.insertVertex("A");
graph.insertVertex("B");
graph.insertVertex("C");
graph.insertVertex("D");
graph.insertVertex("E");

graph.insertEdge("A", "B");
graph.insertEdge("A", "C");
graph.insertEdge("B", "D");
graph.insertEdge("B", "E");
graph.insertEdge("C", "D");

console.log(graph.shortestPath("A", "D")); // Output: ["A", "B", "D"]
