


class Graph{
    constructor() {
        this.adjacentList={}
    }

    insertVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set();
        }
    }

    insertEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.insertVertex(vertex1)
        }
        if (!this.adjacentList[vertex2]) { 
            this.insertVertex(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    deleteEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "cannot find a vertex";
        }

        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    deleteVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return "cannot find the vertex"
        }

        for (const ele of this.adjacentList[vertex]) {
            this.deleteEdge(vertex, ele);
        }

        delete this.adjacentList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "cannot find the vertex"
        }

        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1));
    }

    display() {
        for (const vertex in this.adjacentList) {
            console.log(vertex+"=>"+[...this.adjacentList[vertex]])
        }
    }

    DFS(start) {
        if (!start) {
            return "please provide a start node"
        }
        let stack = [start];
        let result = [];
        let visited = new Set();
        let currentVertex;

        visited.add(start);

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacentList[currentVertex].forEach((ele) => {
                if (!visited.has(ele)) {
                    visited.add(ele);
                    stack.push(ele);
                }
            })
        }
        return result;
    }

    BFS(start) {
        if (!start) {
            return "please provide the start node";
        }

        let queue = [start];
        let result = [];
        let visited = new Set();
        let currentVertex;

        visited.add(start);

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacentList[currentVertex].forEach((ele) => {
                if (!visited.has(ele)) {
                    visited.add(ele);
                    queue.push(ele);
                }
            })
        }
        return result;
    }

    
}


const graph = new Graph();

graph.insertEdge("A","B")
graph.insertEdge("A","C")
graph.insertEdge("A","D")
graph.insertEdge("A", "E")

graph.display()

console.log(graph.BFS("A"))
console.log(graph.DFS("A"))