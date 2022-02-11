class Node {
	constructor(data, prev = null, next = null) {
		this.data = data
		this.prev = prev
		this.next = next
	}
}

class DuoubleList {
	constructor() {
		this.head = null
		this.#size = 0
	}
	insertFirst(data) {
		let newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.#size++
			return
		}
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.#size++
	}

	insertLast(data) {
		let newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.#size++
			return
		} else if (!this.head.next) {
			this.head.next = newNode
			newNode.prev = this.head
			this.#size++
			return
		}
		let N = this.head
		while (N.next) N = N.next
		N.next = newNode
		newNode.prev = N
		this.#size++
	}

	inserAtIndex(index, data) {
		if (!this.head || index > this.#size) return
		if (!(index = +index && index > 0)) {
			// if the index "undefined" Or Zero or less than Zero this if will run.
			this.insertFirst(data)
			this.#size++
			return
		}
		if (index === this.#size) {
			this.insertLast(data)
			this.#size++
			return
		}
		let newNode = new Node(data)
		let current = this.head
		for (let i = 0; i < index - 1 && current; i++) current = current.next
		newNode.next = current.next
		newNode.prev = current
		current.next = newNode
		this.#size++
	}

	removeFirst() {
		let temp = this.head.data
		if (!this.head) return
		if (!this.head.next) {
			this.head = null
			this.#size--
			return temp
		}
		this.head = this.head.next
		this.head.prev = null
		this.#size--
		return temp
	}

	removeLast() {
		let target
		if (!this.head) return
		if (!this.head.next) {
			target = this.head.data
			this.head = null
			this.#size--
			return target
		}
		let current = this.head
		while (current.next.next) current = current.next
		target = current.next.data
		current.next = null
		this.#size--
		return target
	}

	removeAtIndex(index) {
		let target
		if (!this.head || index >= this.#size) return
		if (!(index == +index && index > 0)) {
			target = this.removeFirst()
			return target
		}
		if (index === this.#size - 1) {
			target = this.removeLast()
			return target
		}
		let current = this.head
		for (let i = 0; i < index - 1 && current; i++) current = current.next
		target = current.next.data
		current.next.next.prev = current
		current.next = current.next.next
		this.#size--
		return target
	}

	print() {
		if (!this.head) return
		let N = this.head
		while (N) {
			console.log(N.data)
			N = N.next
		}
	}
	get size(){
		return this.#size;
	}
}
