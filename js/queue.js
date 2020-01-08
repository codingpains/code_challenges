class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this._size = this.size + 1;
  }

  dequeue() {
    if (this.size) {
      const value = this.first.value;
      this.first = this.first.next;
      this._size = this.size - 1;
      return value;
    }
    return null;
  }

  toArray() {
    let currentNode = this.first;
    const result = [];
    if (this.size === 0) return [];
    while (true) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode === null) break;
    }
    return result;
  }
}

module.exports = Queue;
