const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this._min = null;
  }

  get min() {
    return this._min ? this._min.value : null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
      this._min = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      if (newNode.value < this._min.value) {
        this._min = newNode;
      }
    }
  }

  pop() {
    let value = null;
    if (this.top !== null) {
      value = this.top.value;
      this.top = this.top.next;
      if (value === this.min) this.findNewMin();
    }
    return value;
  }

  findNewMin() {
    let currentNode = this.top;
    let min = currentNode.value;
    if (currentNode !== null) {
      while (true) {
        if (currentNode.value < min) {
          min = currentNode.value;
          this._min = currentNode;
        }
        currentNode = currentNode.next;
        if (currentNode === null) break;
      }
    }
  }

  toArray() {
    let currentNode = this.top;
    const result = [];
    if (currentNode === null) return [];
    while (true) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode === null) break;
    }
    return result;
  }
}

module.exports = Stack;
