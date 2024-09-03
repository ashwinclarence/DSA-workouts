


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
            this.insertVertex[vertex1]
        }

        if (!this.adjacentList[vertex2]) {
            this.adjacentList[vertex2]
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
            return `cant find the ${vertex1}`
        }
        if (!this.adjacentList[vertex2]) {
            return `cant find the ${vertex2}`
        }
        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1))
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return
        }

        for (const adjacentVertex of this.adjacentList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacentList[vertex]
    }

    display() {
        for (const vertex in this.adjacentList) {
            console.log(vertex + "=>" + [...this.adjacentList[vertex]])
        }
    }
}


const graph = new Graph();

graph.insertVertex("A")
graph.insertVertex("B")
graph.insertVertex("C")

graph.insertEdge("A", "B");

graph.display()

// graph.removeEdge("A", "B")

graph.removeVertex("A")
graph.display()

console.log("has edge ", graph.hasEdge("A", "B"))