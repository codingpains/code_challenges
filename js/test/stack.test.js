const Stack = require('../stack');

describe('Stack', () => {
  let subject;
  beforeEach(() => { subject = new Stack(); });

  it('should have a method push', () => {
    expect(subject).respondTo('push');
  });

  it('should have a method pop', () => {
    expect(subject).respondTo('pop');
  });

  it('should return correct size and array representation after pushing 3 values', () => {
    const expected = ['a', 'b', 'c'];
    expected.forEach((c) => subject.push(c));
    expect(subject.toArray()).to.eql(expected.reverse());
  });

  it('should return correct size and array representation after pushing 4 and poping 1', () => {
    const input = ['a', 'b', 'c', 'd'];
    const expected = ['a', 'b', 'c'];
    input.forEach((c) => subject.push(c));
    expect(subject.pop()).to.equal('d');
    expect(subject.toArray()).to.eql(expected.reverse());
  });

  it('should return min value', () => {
    const input = [4,2,3,5,1,10,8,8];
    input.forEach((c) => subject.push(c));
    expect(subject.min).to.equal(1);
  });

  it('should return new min value', () => {
    const input = [4,2,3,5,1,10,8,8];
    input.forEach((c) => subject.push(c));
    let lastItem;
    while (lastItem !== 1) {
      lastItem = subject.pop();
    }
    expect(subject.min).to.equal(2);
  });
});
