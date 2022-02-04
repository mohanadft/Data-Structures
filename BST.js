class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root) {
    this.root = root;
  }

  insertUI(root, data) {
    if (root === null) {
      root = new TreeNode(data);
      return root;
    } else if (data < root.data) {
      root.left = this.insertUI(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.insertUI(root.right, data);
      return root;
    } else {
      console.log(data, "Existed, Can't Add it");
      return root;
    }
  }
  // Wrapper Method
  insert(data) {
    this.root = this.insertUI(this.root, data);
    return this.root;
  }

  deleteUI(root, data) {
    let p, q, s;
    if (!root) {
      console.log(data, "Not Found");
      return root;
    } else if (data < root.data) {
      root.left = this.deleteUI(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.deleteUI(root.right, data);
      return root;
    } else {
      q = root;
      s = root;

      if (!q.right) root = q.left;
      else if (!q.left) root = q.right;
      else {
        p = q.right;
        while (p) {
          s = p;
          p = p.left;
        }
        root = p;
        root.left = q.left;
        s.left = p.right;
        if (q.right == p) root.right = p.right;
        else root.right = q.right;
      }
      return root;
    }
  }

  delete(data) {
    this.root = this.deleteUI(this.root, data);
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

  searchUI(root, data) {
    if (root) {
      if (data > root.data) {
        this.searchUI(root.right, data);
      }
      if (data < root.data) this.searchUI(root.left, data);
      if (data === root.data) console.log("Found");
    } else {
      console.log("Not Found");
      return;
    }
  }

  includes(data) {
    this.searchUI(this.root, data);
  }
}
