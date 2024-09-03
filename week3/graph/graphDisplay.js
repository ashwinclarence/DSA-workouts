

class Graph{
    
    constructor() {
        this.adjacencyList={}
    }

    addVertex(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    display() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex+"=>"+[...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")


graph.addEdge("A","B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("B", "C")
graph.addEdge("C", "D")


graph.display()

console.log(graph.hasEdge("A","B"))