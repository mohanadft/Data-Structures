class TreeNode {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

class BST {
	constructor(root) {
		this.root = new TreeNode(root)
	}

	#insertUI(root, data) {
		if (root === null) {
			root = new TreeNode(data)
			return root
		} else if (data < root.data) {
			root.left = this.#insertUI(root.left, data)
			return root
		} else if (data > root.data) {
			root.right = this.#insertUI(root.right, data)
			return root
		} else {
			console.error(
				`%cBST: %cThe value of %c${data} %ccannot be added, since it already exists.`,
				'color: #0099ff; font-weight:700',
				`color: #FF2D2D`,
				'color: yellow; font-style: italic;',
				'color: #FF2D2D'
			)
			return root
		}
	}
	// Wrapper Method
	insert(data) {
		this.root = this.#insertUI(this.root, data)
		return this.root
	}

	deleteUI(root, data) {
		let p, q, s
		if (!root) {
			console.error(
				`%cBST: %cCouldn't find the node with the value of %c${data} %cto delete.`,
				'color: #0099ff; font-weight:700',
				`color: #FF2D2D`,
				'color: yellow; font-style: italic;',
				'color: #FF2D2D'
			)
			return root
		} else if (data < root.data) {
			root.left = this.deleteUI(root.left, data)
			return root
		} else if (data > root.data) {
			root.right = this.deleteUI(root.right, data)
			return root
		} else {
			q = root
			s = root

			if (!q.right) root = q.left
			else if (!q.left) root = q.right
			else {
				p = q.right
				while (p) {
					s = p
					p = p.left
				}
				root = p
				root.left = q.left
				s.left = p.right
				if (q.right == p) root.right = p.right
				else root.right = q.right
			}
			return root
		}
	}

	delete(data) {
		this.root = this.deleteUI(this.root, data)
	}

	#preOrderUI(root) {
		let N = root
		if (N) {
			console.log(N.data)
			this.#preOrderUI(N.left)
			this.#preOrderUI(N.right)
		}
	}

	// Wrapper Method
	preOrder() {
		this.#preOrderUI(this.root)
	}

	#inOrderUI(root) {
		let N = root
		if (N) {
			this.#inOrderUI(N.left)
			console.log(N.data)
			this.#inOrderUI(N.right)
		}
	}

	// Wrapper Method
	inOrder() {
		this.#inOrderUI(this.root)
	}

	#postOrderUI(root) {
		let N = root
		if (N) {
			this.#postOrderUI(N.left)
			this.#postOrderUI(N.right)
			console.log(N.data)
		}
	}
	// Wrapper Method

	postOrder() {
		this.#postOrderUI(this.root)
	}

	#searchUI(root, data) {
		if (root) {
			if (data > root.data) return this.#searchUI(root.right, data)
			if (data < root.data) return this.#searchUI(root.left, data)
			if (data === root.data) return true
		} else return false
	}

	includes(data) {
		return this.#searchUI(this.root, data)
	}

	#getMinUI(root) {
		if (root.left) return this.#getMinUI(root.left)
		return root.data
	}

	getMin() {
		return this.#getMinUI(this.root)
	}

	#getMaxUI(root) {
		if (root.right) return this.#getMaxUI(root.right)
		return root.data
	}

	getMax() {
		return this.#getMaxUI(this.root)
	}
}
