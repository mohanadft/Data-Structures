class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
	remove(data) {
		let N = this
		let prev = null

		while (N) {
			if (N.data == data) {
				prev.next = N.next
			}
			prev = N
			N = N.next
		}
		console.log(this)
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	insertFirst(data) {
		if (!this.head) {
			this.head = new Node(data, null)
			this.size++
			return
		}
		this.head = new Node(data, this.head)
		this.size++
	}

	insertLast(data) {
		let node = new Node(data)
		let current
		if (!this.head) {
			this.head = node
		} else {
			current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = node
		}
		this.size++
	}

	insertAtIndex(index, data) {
		let newNode = new Node(data)
		if (this.head || index > this.size) return
		if (!(index = +index && index > 0)) {
			// if the index "undefined" Or 0 this if will run.
			this.insertFirst(data)
			this.size++
			return
		}
		if (index === this.size) {
			this.insertLast(data)
			this.size++
			return
		}
		let current = this.head
		for (let i = 0; i < index - 1 && current; i++) current = current.next
		newNode.next = current.next
		current.next = newNode
		this.size++
	}

	removeFirst() {
		if (!this.head) return
		let temp = this.head.data
		this.head = this.head.next
		this.size--
		return temp
	}

	removeLast() {
		if (!this.head) return
		let N = this.head
		while (N.next.next != null) N = N.next
		let temp = N.next.data
		N.next = null
		this.size--
		return temp
	}

	removeAtIndex(index) {
		let target
		if (!this.head || index >= this.size) return
		if (!(index == +index && index > 0)) {
			target = this.removeFirst()
			return target
		}
		if (index === this.size - 1) {
			target = this.removeLast()
			return target
		}
		let current = this.head
		for (let i = 0; i < index - 1 && current; i++) current = current.next
		target = current.next.data
		current.next = current.next.next
		this.size--
		return target
	}

	indexOf(data) {
		let index = 0
		if (!this.head) {
			return -1
		}

		let N = this.head
		while (N) {
			if (N.data === data) {
				return index
			}
			index++
			N = N.next
		}
		return -1
	}

	elementAt(index) {
		if (!this.head) {
			return
		}
		let N = this.head
		for (let i = 0; i < index; i++) {
			N = N.next
		}
		return N.data
	}

	concat(list) {
		if (this.head == null && list.head == null) {
			return null
		}
		let N1 = this.head,
			N2 = list.head
		while (N1.next) {
			N1 = N1.next
		}
		N1.next = N2
		return this
	}

	reverse() {
		let R, N, L1
		R = null
		L1 = this.head
		while (L1) {
			N = L1
			L1 = L1.next
			N.next = R
			R = N
		}
		this.head = R
	}

	clone() {
		let list = new LinkedList()
		if (!this.head) return list
		let N = this.head

		while (N) {
			list.insertLast(N.data)
			N = N.next
		}
		return list
	}

	print(cb = console.log) {
		let N = this.head
		while (N) {
			cb(N.data)
			N = N.next
		}
	}

	printReverse(head, cb = console.log) {
		let N = head
		if (N) {
			this.printReverse(N.next)
			cb(N.data)
		}
	}

	clear() {
		this.head = null
	}
}

// TODO: Move last element to front of a given Linked List

/**
 *
 * @param {LinkedList} list
 * @returns LinkedList
 */

const moveLastElementToFront = list => {
	if (list.size === 0 || list.size === 1) return list
	let N = list.head
	let N1 = null

	while (N.next) {
		N1 = N
		N = N.next
	}
	N.next = list.head
	N1.next = null
	list.head = N
	return list
}

// TODO: Length Of List Iteratively

/**
 *
 * @param {LinkedList} list
 * @returns number
 */

const length = list => {
	let N = list.head
	let count = 0
	while (N) {
		count++
		N = N.next
	}
	return count
}

// TODO: Length Of List Recursively

/**
 *
 * @param {LinkedList} head
 * @returns number
 */

const lengthRecursively = head => {
	if (!head) return 0
	let count = 0
	if (head) {
		count++
		count += lengthRecursively(head.next)
	}
	return count
}

// TODO: Print the middle of a given linked list

/**
 *
 * @param {LinkedList} list
 * @returns null
 */

const printMiddle = list => {
	if (!list.head) return
	if (!list.head.next) {
		console.log(list.head.data)
		return
	}
	let N = list.head
	for (let i = 0; i < list.size / 2 - 1; i++) N = N.next
	console.log(N.data)
}

// TODO: check if a singly linked list is palindrome

/**
 *
 * @param {LinkedList} list
 * @returns boolean
 */

const isPalindrome2 = list => {
	let list2 = list.clone()
	list.reverse()
	let N1 = list.head
	let N2 = list2.head

	while (N1) {
		if (N1.data !== N2.data) return false
		N1 = N1.next
		N2 = N2.next
	}
	return true
}

// TODO: check if a singly linked list is palindrome

/**
 *
 * @param {LinkedList} l
 * @returns boolean
 */

const isPalindrome = l => {
	if (!l || !l.next) return true
	let N = l
	let values = []
	while (N) {
		values.push(N.value)
		N = N.next
	}
	return [...values].join('') == values.reverse().join('')
}

// TODO: Reverse a single linked list

/**
 *
 * @param {LinkedList} list
 * @returns LinkedList
 */

const reverse = list => {
	let current = list.head
	const newList = new LinkedList()
	while (current) {
		newList.insertFirst(current.data)
		current = current.next
	}
	return newList
}

/**
 * TODO:
 * Delete Middle Node:
 *
 * Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily the exact middle)
 * of a singly linked list, given only access to that node.
 *
 * @param {Node} node
 * @returns null
 */

const deleteNode = n => {
	if (!n || !n.next) return false
	let next = n.next
	n.data = next.data
	n.next = next.next
	return true
}
