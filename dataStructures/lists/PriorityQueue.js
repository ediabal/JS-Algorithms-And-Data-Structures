// Priority Queue
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue = (val, priority) => {
    this.queue.push({ val, priority });
    this.sort();
  };

  dequeue = () => this.queue.shift();

  sort = () => this.queue.sort((a, b) => a.priority - b.priority);
}