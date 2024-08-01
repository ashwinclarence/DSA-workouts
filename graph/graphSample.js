



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
            this.insertVertex(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "cannot find the vertex";
        }

        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return "cannot find the vertex"
        }

        for (const ele of this.adjacentList[vertex]) {
            this.removeEdge(vertex, ele);
        }

        delete this.adjacentList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return "cannot find the vertex";
        }

        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1));
    }

    display() {
        for (const ele in this.adjacentList) {
            console.log(ele +"=>"+[...this.adjacentList[ele]])
        }
    }

    BFS(start) {
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

    DFS(start) {
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
                    stack.push(ele)
                }
            })
        }
        return result;
    }

    hasCycle() {
        let visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);

            for (const ele of this.adjacentList[node]) {
                if (!visited.has(ele)) {
                    if (dfs(ele, node)) {
                        return true;
                    }
                } else if (ele != parent) {
                    return true;
                }
            }
            return false;
        }

        for (const ele in this.adjacentList) {
            if (!visited.has(ele)) {
                if (dfs(ele, null)) {
                    return true; // Cycle found in the component
                }
            }
        }
        return false

    }

    detectCycles() {
        let visited = new Set();
        let cyclesCount = 0;

        const dfs = (vertex, parent) => {
            visited.add(vertex);

            for (let neighbor of this.adjacentList[vertex]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    cyclesCount++;
                    return true;
                }
            }
            return false;
        };

        for (let vertex in this.adjacentList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) {
                    // Since each cycle is counted twice (once from each direction), we need to divide by 2
                    cyclesCount = Math.floor(cyclesCount / 2);
                }
            }
        }

        return cyclesCount;
    }

    getDegree(vertex) {
        if (!this.adjacentList[vertex]) {
            return 
        }

        return this.adjacentList[vertex].size
    }
}

const graph = new Graph();

graph.insertVertex("A")
graph.insertVertex("B")
graph.insertVertex("C")
graph.insertVertex("D")
graph.insertVertex("E")

graph.insertEdge("A","B")
graph.insertEdge("A","C")
graph.insertEdge("A","D")
graph.insertEdge("A", "E")

console.log(graph.BFS("A"))
console.log(graph.DFS("A"))
console.log(graph.hasCycle())
console.log(graph.detectCycles())
console.log(graph.getDegree("B"))

graph.display()