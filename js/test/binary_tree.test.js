const BinaryTree = require('../binary_tree');

describe('BinaryTree', () => {
  describe('traversals', () => {
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

  describe('isBalanced', () => {
    it('should return true when balanced', () => {
      const treeInput = {
        value: 1,
        left: {
          value: 12,
          left: { value: 5 },
          right: { value: 6 },
        },
        right: { value: 9 },
      };
      const subject = new BinaryTree(treeInput);
      expect(subject.isBalanced()).to.be.true;
    });

    it('should return false when not balanced', () => {
      const treeInput = {
        value: 1,
        left: {
          value: 12,
          left: {
            value: 5,
            left: { value: 6 },
          },
        },
        right: { value: 9 },
      };
      const subject = new BinaryTree(treeInput);
      expect(subject.isBalanced()).to.be.false;
    });

    it('should return false when not balanced', () => {
      const treeInput = {
        value: 1,
        left: {
          value: 12,
          left: {
            value: 5,
            left: {
              value: 6,
              left: {
                value: 5,
              },
              right: {
                value: 4,
              }
            },
          },
        },
        right: {
          value: 9,
          left: {
            value: 0,
          },
          right: {
            value: 3,
          },
        },
      };
      const subject = new BinaryTree(treeInput);
      expect(subject.isBalanced()).to.be.false;
    });
  });
});
