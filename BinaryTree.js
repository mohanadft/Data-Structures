class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Queue {
  constructor(front = null, rear = null) {
    this.front = front;
    this.rear = rear;
  }

  enqueue(data) {
    if (this.front) {
      let newNode = new TreeNode(data);
      this.rear.right = newNode;
      newNode.left = this.rear;
      this.rear = newNode;
    } else {
      this.front = new TreeNode(data);
      this.rear = this.front;
    }
  }

  dequeue() {
    if (this.front) {
      let temp = this.front;
      this.front = this.front.right;
      if (this.front) this.front.left = null;
      return temp;
    }
  }
}

let maxLevel = 0;

const leftViewOfBinaryTree = (root, level) => {
  if (!root) return;

  if (maxLevel < level) {
    maxLevel = level;
  }
  leftViewOfBinaryTree(root.left, level + 1);
  maxLevel--;
  if (maxLevel < level) console.log(root.data);
};

const rightViewOfBinaryTree = (root, level) => {
  if (!root) return;

  if (maxLevel < level) {
    console.log(root.data);
    maxLevel = level;
  }
  rightViewOfBinaryTree(root.right, level + 1);
};

/*
          15
         | \
        10 20
       | \   \
      5   6   55
     |   |
    12  111
*/

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

const preOrder = (root) => {
  let N = root;

  if (N) {
    preOrder(N.left);
    console.log(N.data);
  }
};

const a2 = new TreeNode(15),
  b = new TreeNode(10),
  c = new TreeNode(20),
  d = new TreeNode(5),
  e = new TreeNode(6),
  f = new TreeNode(55);

a2.left = b;
a2.right = c;
b.right = e;
b.left = d;
c.right = f;
d.left = new TreeNode(12);
e.left = new TreeNode(111);

let queue = new Queue();

const BFS = (root) => {
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

console.log(BFS(a2));
