class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrderUI(root) {
    let N = root;
    if (N) {
      console.log(N.data);
      this.preOrderUI(N.left);
      this.preOrderUI(N.right);
    }
  }

  // Wrapper Method
  preOrder() {
    this.preOrderUI(this.root);
  }
  inOrderUI(root) {
    let N = root;
    if (N) {
      this.inOrderUI(N.left);
      console.log(N.data);

      this.inOrderUI(N.right);
    }
  }

  // Wrapper Method
  inOrder() {
    this.inOrderUI(this.root);
  }

  postOrderUI(root) {
    let N = root;
    if (N) {
      this.postOrderUI(N.left);
      this.postOrderUI(N.right);
      console.log(N.data);
    }
  }
  // Wrapper Method

  postOrder() {
    this.postOrderUI(this.root);
  }
}

// Depth First Traversal === preOrder Traversal
const depthFirstTraversal = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current.data);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
};

// TODO: Breadth First Traversal === left to right level wise (Complete Binary Tree)
const BreadthFirstTraversal = (root) => {
  let values = [];
  const queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      values.push(node.data);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return values.join(", ");
};
