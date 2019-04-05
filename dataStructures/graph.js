// Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = vertex => {
    if (this.adjacencyList[vertex]) throw `${vertex} already exists!`;
    this.adjacencyList[vertex] = [];
  };

  removeVertex = vertex => {
    if (!this.adjacencyList[vertex]) throw `${vertex} does not exist!`;
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  };

  addEdge = (v1, v2) => {
    if (!this.adjacencyList[v1]) throw `${v1} does not exist!`;
    if (!this.adjacencyList[v2]) throw `${v2} does not exist!`;
    if (this.adjacencyList[v1].includes(v2)) throw `${v1} - ${v2} already exists!`;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  };

  removeEdge = (v1, v2) => {
    if (!this.adjacencyList[v1]) throw `${v1} does not exist!`;
    if (!this.adjacencyList[v2]) throw `${v2} does not exist!`;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  };

  depthFirstRecursiveTraversal = origin => {
    const result = [],
      visited = {};

    const visit = vertex => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(adjVertex => {
        if (!visited[adjVertex]) visit(adjVertex);
      });
    };

    visit(origin);
    return result;
  };

  depthFirstIterativeTraversal = origin => {
    const stack = [origin],
      result = [],
      visited = {};
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach(adjVertex => stack.push(adjVertex));
      }
    }

    return result;
  };

  breadthFirstGraphTraversal = origin => {
    const queue = [origin],
      result = [],
      visited = {};
    let vertex;

    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach(adjVertex => queue.push(adjVertex));
      }
    }

    return result;
  };
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
