class TreeNode {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

class BST {
	constructor(root) {
		this.#root = root
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
		this.#root = this.#insertUI(this.#root, data)
		return this.#root
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
		this.#root = this.deleteUI(this.#root, data)
	}

	#preOrderUI(root, cb) {
		let N = root
		if (N) {
			cb(N.data)
			this.#preOrderUI(N.left)
			this.#preOrderUI(N.right)
		}
	}

	// Wrapper Method
	preOrder(cb = console.log) {
		this.#preOrderUI(this.#root, cb)
	}

	#inOrderUI(root, cb) {
		let N = root
		if (N) {
			this.#inOrderUI(N.left)
			cb(N.data)

			this.#inOrderUI(N.right)
		}
	}

	// Wrapper Method
	inOrder(cb = console.log) {
		this.#inOrderUI(this.#root, cb)
	}

	#postOrderUI(root, cb) {
		let N = root
		if (N) {
			this.#postOrderUI(N.left)
			this.#postOrderUI(N.right)
			cb(N.data)
		}
	}
	// Wrapper Method

	postOrder(cb = console.log) {
		this.#postOrderUI(this.#root, cb)
	}

	#searchUI(root, data) {
		if (root) {
			if (data > root.data) return this.#searchUI(root.right, data)
			if (data < root.data) return this.#searchUI(root.left, data)
			if (data === root.data) return true
		} else return false
	}

	includes(data) {
		return this.#searchUI(this.#root, data)
	}
	// Getters
	get root() {
		return this.#root
	}
}
