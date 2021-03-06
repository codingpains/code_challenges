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

  describe('isBinarySearchTree', () => {
    it('should respond to isBinarySearchTree', () => {
      const subject = new BinaryTree({});
      expect(subject).to.respondTo('isBinarySearchTree');
    });

    it('should return true if binary search tree', () => {
      const treeInput = {
        value: 6,
        left: {
          value: 5,
          left: { value: 2 },
          right: { value: 5 },
        },
        right: { value: 9 },
      };
      const subject = new BinaryTree(treeInput);
      expect(subject.isBinarySearchTree()).to.be.true;
    });

    it('should return false if binary search tree', () => {
      const treeInput = {
        value: 6,
        left: {
          value: 5,
          left: { value: 2 },
          right: { value: 1 },
        },
        right: { value: 9 },
      };
      const subject = new BinaryTree(treeInput);
      expect(subject.isBinarySearchTree()).to.be.false;
    });
  });

  describe('buildBinarySearchTree', () => {
    it('should respond to buildBinarySearchTree', () => {
        const subject = new BinaryTree({});
        expect(subject).to.respondTo('buildBinarySearchTree');
    });

    it('should build binary search tree', () => {
      const input = [1,2,3,4,5,6,7,8,9,10];
      const subject = new BinaryTree({});
      subject.buildBinarySearchTree(input);
      expect(subject.inorder()).to.eql(input);
    });

    it('should build binary search tree', () => {
      const input = [0,2,3,4,6,7,9,11,12,15,17,18,19,20,21,30];
      const subject = new BinaryTree({});
      subject.buildBinarySearchTree(input);
      expect(subject.inorder()).to.eql(input);
    });
  });
});
