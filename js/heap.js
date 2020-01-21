class Heap {
  constructor() {
    this._heapArray = [];
  }

  get size() { return this._heapArray.length; }

  insert(element) {
    this._heapArray.push(element);
    this._balance(this.size - 1);
  }

  _parentIndex(child) {
    return Math.floor((child-1)/2);
  }

  _leftChildIndex(parent) {
    return 2 * parent + 1;
  }

  _rightChildIndex(parent) {
    return 2 * parent + 2;
  }

  _siftUp(child) {
    if (child === 0) return -1;
    const parent = this._parentIndex(child);
    const parentValue = this._heapArray[parent];
    const childValue = this._heapArray[child];
    this._heapArray[parent] = childValue;
    this._heapArray[child] = parentValue;
    return parent;
  }

  _siftDown(parent, childIndex) {
    const child = childIndex ? childIndex : 2 * parent + 1;
    if (child >= this.size) return -1;
    const parentValue = this._heapArray[parent];
    const childValue = this._heapArray[child];
    this._heapArray[parent] = childValue;
    this._heapArray[child] = parentValue;
    return child;
  }

  _smallestChild(parent) {
    const leftIndex = this._leftChildIndex(parent);
    if (leftIndex === -1) return -1;
    const left = this._heapArray[leftIndex];
    const rightIndex = this._rightChildIndex(parent);
    const right = this._heapArray[rightIndex];
    return left < right ? leftIndex : rightIndex;
  }

  _balance() {
    throw new Error('Should implement this method in a MinHeap or MaxHeap subclass');
  }
};

class MinHeap extends Heap {
  _balance(child) {
    let parent = this._parentIndex(child);
    let childIndex = child;
    while (parent >= 0 && this._heapArray[parent] > this._heapArray[childIndex]) {
      childIndex = this._siftUp(childIndex);
      parent = this._parentIndex(childIndex);
    }
  };

  _balanceDown(parent) {
    let child = this._smallestChild(parent);
    let parentIndex = parent;
    while (child >= 0 && this._heapArray[parentIndex] > this._heapArray[child]) {
      parentIndex = this._siftDown(parent, child);
      child = this._smallestChild(parentIndex);
    }
  }

  removeMin() {
    const rootValue = this._heapArray[0];
    const swapValue = this._heapArray[this.size - 1];
    this._heapArray[0] = swapValue;
    this._heapArray.pop();
    //this._balanceDown(0);
    return rootValue;
  };
};

module.exports = { Heap, MinHeap };
