const { MinHeap, Heap } = require('../heap');

describe('Heap', () => {
  it('should return error if insert is invoked directly', () => {
    const subject = new Heap();
    expect(() => { subject.insert(1) }).to.throw();
  });

  describe('MinHeap', () => {
    let subject;
    beforeEach(() => {
      subject = new MinHeap();
    });

    it('should create a Heap with size 0', () => {
      expect(subject.size).to.equal(0);
    });

    describe('siftUp', () => {
      it('should swap given node with parent', () => {
        subject._heapArray = [5, 6, 7, 9, 1];
        expect(subject._siftUp(4)).to.equal(1);
        expect(subject._heapArray).to.eql([5, 1, 7, 9, 6]);
      });

      it('should not swap if node is already root', () => {
        subject._heapArray = [5, 6, 7, 9, 1];
        subject._siftUp(0);
        expect(subject._heapArray).to.eql([5, 6, 7, 9, 1]);
      });
    });

    describe('siftDown', () => {
      it('should swap given parent and child', () => {
        subject._heapArray = [5, 6, 7, 9, 1];
        expect(subject._siftDown(0, 1)).to.equal(1);
        expect(subject._heapArray).to.eql([6, 5, 7, 9, 1]);
      });

      it('should swap given parent no child', () => {
        subject._heapArray = [5, 6, 7, 9, 1];
        subject._siftDown(1);
        expect(subject._heapArray).to.eql([5, 9, 7, 6, 1]);
      });

      it('should not swap if parent is already leaf', () => {
        subject._heapArray = [5, 6, 7, 9, 1];
        subject._siftDown(3);
        expect(subject._heapArray).to.eql([5, 6, 7, 9, 1]);
      });
    });

    describe('balance', () => {
      it('should balance', () => {
        subject._heapArray = [5, 6, 7, 9, 1];
        subject._balance(4);
        expect(subject._heapArray).to.eql([1, 5, 7, 9, 6]);
      });
    });

    it('should insert an element into the heap', () => {
      expect(subject.size).to.equal(0);
      subject.insert(10);
      expect(subject.size).to.equal(1);
    });

    describe('insert full flow', () => {
      let minHeap = new MinHeap();
      [
        [9, [9]], [6, [6, 9]], [3, [3,9,6]], [10, [3, 9, 6, 10]], [5, [3, 5, 6, 10, 9]],
        [2, [2, 5, 3, 10, 9, 6]], [5, [2, 5, 3, 10, 9, 6, 5]], [1, [1, 2, 3, 5, 9, 6, 5, 10]],
      ].forEach((data) => {
        it(`should balance heap upon insertion for ${data[0]}, heap is ${data[1].join()}`, () => {
          minHeap.insert(data[0]);
          expect(minHeap._heapArray).to.eql(data[1]);
        });
      });
    });

    describe('removeMin', () => {
      it('should return value removed', () => {
        subject._heapArray = [1, 2, 3, 5, 9, 6, 5, 10];
        expect(subject.removeMin()).to.equal(1);
        expect(subject.size).to.equal(7);
      });

      it('should balance after removal', () => {
        subject._heapArray = [1, 2, 3, 5, 9, 6, 5, 10];
        subject.removeMin()
        expect(subject._heapArray).to.eql([2, 5, 3, 10, 9, 6, 5]);
      });
    });
  });
});
