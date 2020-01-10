const Queue = require('./queue');

class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
};

class BinaryTree {
  constructor(input) {
    this.root = this.buildTree(input);
  }

  buildTree(input) {
    if (!input) return null;
    const node = new TreeNode(input.value);
    node.left = this.buildTree(input.left);
    node.right = this.buildTree(input.right);
    return node;
  }

  inorder() {
    return this.traverseInorder(this.root, []);
  }

  traverseInorder(node, output) {
    if (!node) return output;

    if (node.left) this.traverseInorder(node.left, output);
    output.push(node.value);
    if (node.right) this.traverseInorder(node.right, output);
    return output;
  }

  preorder() {
    return this.traversePreorder(this.root, []);
  }

  traversePreorder(node, output) {
    if (!node) return output;

    output.push(node.value);
    if (node.left) this.traversePreorder(node.left, output);
    if (node.right) this.traversePreorder(node.right, output);
    return output;
  }

  postorder() {
    return this.traversePostorder(this.root, []);
  }

  traversePostorder(node, output) {
    if (!node) return output;

    if (node.left) this.traversePostorder(node.left, output);
    if (node.right) this.traversePostorder(node.right, output);
    output.push(node.value);
    return output;
  }

  isBalanced() {
    return this.checkHeight(this.root) !== -1;
  }

  checkHeight(node) {
    let leftHeight, rightHeight, diff;
    if (!node) return 0;

    leftHeight = this.checkHeight(node.left);
    if (leftHeight === -1) return -1;

    rightHeight = this.checkHeight(node.right);
    if (rightHeight === -1) return -1;

    diff = leftHeight - rightHeight;
    if (Math.abs(diff) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBinarySearchTree() {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size > 0) {
      const currentNode = queue.dequeue();
      const { left, right, value } = currentNode;

      if (left) {
        if (left.value >= value) return false;
        if (left.left || left.right) queue.enqueue(left);
      }

      if (right) {
        if (right.value < value) return false;
        if (right.left || right.right) queue.enqueue(right);
      }
    }

    return true;
  }

  buildBinarySearchTree(input) {
    this.root = this.createBinaryTreeFromArray(input);
    console.log(this.root)
  }

  createBinaryTreeFromArray(input) {
    const half = Math.max(Math.floor(input.length / 2) - 1, 0);
    const node = new TreeNode(input[half]);
    const leftSubarray = input.filter(i => i < input[half]);
    const rightSubarray = input.filter(i => i > input[half]);
    if (leftSubarray.length){
      node.left = this.createBinaryTreeFromArray(leftSubarray);
    }
    if (rightSubarray.length) {
      node.right = this.createBinaryTreeFromArray(rightSubarray);
    }
    return node;
  }
}

module.exports = BinaryTree;
