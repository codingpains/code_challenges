const BinaryTree = require('../binary_tree');

describe('BinaryTree', () => {
  let subject;
  const treeInput = {
    value: 1,
    left: {
      value: 12,
      left: { value: 5 },
      right: { value: 6 },
    },
    right: { value: 9 },
  };

  beforeEach(() => {
    subject = new BinaryTree(treeInput);
  });

  it('should traverse inorder', () => {
    const expected = [5, 12, 6, 1, 9];
    expect(subject.inorder()).to.eql(expected);
  });

  it('should traverse preorder', () => {
    const expected = [1, 12, 5, 6, 9];
    expect(subject.preorder()).to.eql(expected);
  });

  it('should traverse postorder', () => {
    const expected = [5, 6, 12, 9, 1];
    expect(subject.postorder()).to.eql(expected);
  });
});
