
class Graph{
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

    removeEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "Cannot find the vertex";
        }

        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return "cannot find the vertex";
        }

        for (const ele of this.adjacentList[vertex]) {
            this.removeEdge(vertex, ele);
        }

        delete this.adjacentList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "Cannot find the vertex";
        }

        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1));
    }

    display() {
        for (const ele in this.adjacentList) {
            console.log(ele+"=>"+[...this.adjacentList[ele]]);
        }
    }

    bfs(start) {
        if (!start) {
            return "please send the starting node also"
        }
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

    dfs(start) {
        if (!start) {
            return "please send the starting node also"
        }
        let stack = [start];
        let result = [];
        let visited = new Set();
        let currentVertex;
        visited.add(start);

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            for (const ele of this.adjacentList[currentVertex]) {
                if (!visited.has(ele)) {
                    visited.add(ele);
                    stack.push(ele);
                }
            }
        }
        return result;
    }

    secondNode() {
        let keys = Object.keys(this.adjacentList);

        if (keys.length < 2) {
            return "there is no second node";
        }

        return keys[1];
    }

    getDegree(node) {
        if (!this.adjacentList[node]) {
            return "cannot find the node";
        }

        return this.adjacentList[node].size;
    }
}


let graph = new Graph();

graph.insertEdge("A","B")
graph.insertEdge("A","C")
graph.insertEdge("A","D")
graph.insertEdge("A","E")
graph.insertEdge("A", "F")

graph.display();
console.log(graph.bfs('A'));
console.log(graph.dfs('A'));

console.log(graph.secondNode())
console.log(graph.getDegree('A'))
