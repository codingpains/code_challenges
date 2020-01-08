const Queue = require('../queue');

describe('Queue', () => {
  let q;
  beforeEach(() => { q = new Queue(); });

  it('should have a method enqueue', () => {
    expect(q).respondTo('enqueue');
  });

  it('should have a method dequeue', () => {
    expect(q).respondTo('dequeue');
  });

  it('should return correct size and array representation after queueing 3 values', () => {
    const expected = ['a', 'b', 'c'];
    expected.forEach((c) => q.enqueue(c));
    expect(q.size).to.equal(3);
    expect(q.toArray()).to.eql(expected);
  });

  it('should return correct size and array representation after queueing 4 and dequeuing 1', () => {
    const input = ['a', 'b', 'c', 'd'];
    const expected = ['b', 'c', 'd'];
    input.forEach((c) => q.enqueue(c));
    expect(q.dequeue()).to.equal('a');
    expect(q.size).to.equal(3);
    expect(q.toArray()).to.eql(expected);
  });
});
