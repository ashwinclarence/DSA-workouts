


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
            this.insertVertex(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            return "vertex1 is not present";
        }

        if (!this.adjacentList[vertex2]) {
            return "vertex2 is not defined";
        }

        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return 
        }

        for (const ele of this.adjacentList[vertex]) {
            this.removeEdge(vertex, ele);
        }

        delete this.adjacentList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        
        if (!this.adjacentList[vertex1]) {
            return "there is no vertex1";
        }

        if (!this.adjacentList[vertex2]) {
            return "there is no vertex2";
        }

        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1));
    }

    display() {
        for (const vertex in this.adjacentList) {
            console.log(vertex + "=>" + [...this.adjacentList[vertex]]);
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
            this.adjacentList[currentVertex].forEach((ele) => {
                if (!visited.has(ele)) {
                    visited.add(ele);
                    queue.push(ele)
                }
            })
        }
        return result
    }

    DFS(start) {
        let stack = [start];
        let visited = new Set();
        let result = [];
        let currentVertex;

        visited.add(start);

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacentList[currentVertex].forEach((ele) => {
                if (!visited.has(ele)) {
                    visited.add(ele);
                    stack.push(ele)
                }
            })
        }
        return result
    }

}


const graph = new Graph();

graph.insertEdge("B","A")
graph.insertEdge("B","C")
graph.insertEdge("M","A")


graph.display()

console.log(graph.bfs("A"))
console.log(graph.DFS("A"))