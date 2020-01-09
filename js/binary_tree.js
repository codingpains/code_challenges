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
}

module.exports = BinaryTree;
