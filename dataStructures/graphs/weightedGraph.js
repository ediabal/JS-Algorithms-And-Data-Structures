// Weighted Graph
class WeightedGraph {
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

  addEdge = (v1, v2, weight) => {
    if (!this.adjacencyList[v1]) throw `${v1} does not exist!`;
    if (!this.adjacencyList[v2]) throw `${v2} does not exist!`;
    if (this.adjacencyList[v1].includes(v2)) throw `${v1} - ${v2} already exists!`;
    this.adjacencyList[v1].push({ vertex: v2, weight });
    this.adjacencyList[v2].push({ vertex: v1, weight });
  };

  removeEdge = (v1, v2) => {
    if (!this.adjacencyList[v1]) throw `${v1} does not exist!`;
    if (!this.adjacencyList[v2]) throw `${v2} does not exist!`;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(({ vertex }) => vertex !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(({ vertex }) => vertex !== v1);
  };

  // Dijkstra's Algorithm
  shortestPath = (start, end) => {
    const distances = {},
      priorityQueue = new PriorityQueue(),
      previous = {};
    let smallest, path = [];
    
    // iterate over each vertex in the adjacentList
    for (let vertex in this.adjacencyList) {
      // initial distance of the starting vertex is 0 &
      // initial distance of the other vertices are Infinity because they
      // are not known.
      distances[vertex] = vertex === start ? 0 : Infinity;
      // add the unvisited vertices to the priorityQueue
      priorityQueue.enqueue(vertex, distances[vertex]);
      // initialize the previously visited vertex of each key to null
      previous[vertex] = null;
    }

    // as long as there's something to visit
    while (priorityQueue.queue.length) {
      // get the current vertex with smallest distance
      smallest = priorityQueue.dequeue().val;
      // if the smallest vertex is the ending vertex, the vertex has been reached
      if (smallest === end) {
        // build out the path to the vertex
        while (previous[smallest]) {
          path = [smallest, ...path];
          smallest = previous[smallest];
        }
        // add the final vertex to the path
        path = [smallest, ...path]
        break;
      }
      // if there is a vertex and it's distance isn't Infinity
      if (smallest || distances[smallest] !== Infinity) {
        // iterate over all of the edges from this vertex
        for (let index in this.adjacencyList[smallest]) {
          // find the adjacent vertex
          let adjVertex = this.adjacencyList[smallest][index];
          // calculate the distance to the adjVertex
          let candidate = distances[smallest] + adjVertex.weight;
          if (candidate < distances[adjVertex.vertex]) {
            // updating the new smallest distance to the adjVertex
            distances[adjVertex.vertex] = candidate;
            // updating the previous vertex to the current vertex, how we got here
            previous[adjVertex.vertex] = smallest;
            // enqueue in the priorityQueue the new distance
            priorityQueue.enqueue(adjVertex.vertex, candidate);
          }
        }
      }
    }
    return path;
  };
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  parentIndex = index => Math.floor((index - 1) / 2);

  leftChildIndex = index => index * 2 + 1;

  rightChildIndex = index => index * 2 + 2;

  /* Move the value at the given index up to the correct index in the queue. */
  bubbleUp = index => {
    // find the parentIndex of the given index
    let parentIndex = this.parentIndex(index);
    // if the index is less than or equal to the first index of the queue or the value of
    // the current index priority is greater than the priority at the parentIndex it's done.
    if (index <= 0 || this.queue[index].priority >= this.queue[parentIndex].priority)
      return this.queue;
    // swap the nodes at the current and parentIndex
    [this.queue[index], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[index]];
    // bubble up from the parentIndex
    return this.bubbleUp(parentIndex);
  };

  /* Move the node at the given index down to the correct index in the queue. */
  sinkDown = index => {
    const leftIndex = this.leftChildIndex(index),
      rightIndex = this.rightChildIndex(index),
      leftChild = this.queue[leftIndex],
      rightChild = this.queue[rightIndex],
      length = this.queue.length;
    let highest = index;
    // if the leftIndex is in range and the leftChild exists and its priority is less than
    // the parent set the index of the smallest value to the leftIndex
    if (leftIndex <= length && leftChild && leftChild.priority < this.queue[highest].priority) {
      highest = leftIndex;
    }
    // if the rightIndex is in range and the rightChild exists and its priority is less than
    // the parent set the index of the smallest value to the rightIndex
    if (rightIndex <= length && rightChild && rightChild.priority < this.queue[highest].priority) {
      highest = rightIndex;
    }

    // if the highest priority index changed swap the values and sinkDown the
    // new highest
    if (highest !== index) {
      [this.queue[highest], this.queue[index]] = [this.queue[index], this.queue[highest]];
      this.sinkDown(highest);
    }
  };

  /* Inserts a node into the PriorityQueue and 'bubbles' up the value to
   * the correct index.
   * Complexity: O(log(n))
   */
  enqueue = (val, priority) => {
    this.queue.push(new Node(val, priority));
    return this.bubbleUp(this.queue.length - 1);
  };

  /* Extracts the highest priority node from the PriorityQueue and swaps the last node
   * of the heap to the beginning and 'bubble' it down to the correct position.
   * Complexity: O(log(n))
   */
  dequeue = () => {
    const next = this.queue[0],
      last = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = last;
      this.sinkDown(0);
    }
    return next;
  };
}