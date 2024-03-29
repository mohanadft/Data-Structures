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
		let N = this.head
		let newHead = null

		while (N) {
			if (newHead) {
				let newNode = new Node(N.data)
				newNode.next = newHead
				newHead = newNode
			} else {
				newHead = new Node(N.data)
			}
			N = N.next
		}
		this.head = newHead
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

/**
 *
 * @param {Node} head
 * @param {number} value
 * @returns boolean
 */

// TODO: Find an element

const find = (head, value) => {
	if (!head) return false
	if (head.data === value) return true

	return find(head.next, value)
}

/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @param {Node} l1
 * @param {Node} l2
 * @return {Node}
 */

const addTwoNumbers = function (l1, l2) {
	let [p1, p2] = [l1, l2]

	let nOfNodesInOne = 1,
		nOfNodesInTwo = 1

	while (p1.next) {
		p1 = p1.next
		nOfNodesInOne++
	}

	while (p2.next) {
		p2 = p2.next
		nOfNodesInTwo++
	}

	if (nOfNodesInOne > nOfNodesInTwo) {
		let i = 0
		while (i < nOfNodesInOne - nOfNodesInTwo) {
			p2.next = new Node(0)
			p2 = p2.next
			i++
		}
	} else {
		let i = 0
		while (i < nOfNodesInTwo - nOfNodesInOne) {
			p1.next = new Node(0)
			p1 = p1.next
			i++
		}
	}

	p1 = l1
	p2 = l2

	while (p1 && p2) {
		let sum = p1.val + p2.val
		if (sum >= 10) {
			p1.val = sum % 10
			if (p1.next) {
				p1.next.val += ~~(sum / 10)
			} else {
				p1.next = new Node(~~(sum / 10))
			}
		} else {
			p1.val += p2.val
		}
		p1 = p1.next
		p2 = p2.next
	}
	return l1
}

/**
 * TODO: Given the head of a linked list, remove the nth node from
 * the end of the list and return its head.
 *
 * @param {Node} head
 * @param {number} n
 * @return {Node}
 */

var removeNthFromEnd = function (head, n) {
	let p1 = head
	let p2 = head

	for (let i = 0; i < n; i++) {
		if (p2.next === null) {
			if (i === n - 1) head = head.next
		}
		p2 = p2.next
	}

	if (p2) {
		while (p2.next !== null) {
			p1 = p1.next
			p2 = p2.next
		}
	}

	if (p1.next) {
		p1.next = p1.next.next
	}

	return head
}

/**
 * @param {Node[]} lists
 * @return {Node}
 */

var mergeKLists = function (lists) {
	if (lists.length === 0 || (lists.length === 1 && lists[0] === null))
		return null

	let values = lists
		.reduce((acc, curr) => {
			let p = curr

			while (p) {
				acc.push(p.val)
				p = p.next
			}

			return acc
		}, [])
		.sort((a, b) => b - a)

	if (values.length) {
		let mergedList = new Node(values.pop())
		let p = mergedList

		while (values.length) {
			p.next = new Node(values.pop())
			p = p.next
		}
		return mergedList
	}

	return null
}

/**
 * TODO:  Linked List Cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached
 * again by continuously following the next pointer.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * @param {Node} head
 * @returns {boolean}
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

const detectCycle = head => {
	let p = head
	let visited = new Set()

	while (p) {
		if (visited.has(p)) return true

		visited.add(p)

		p = p.next
	}

	return false
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Blazingly Efficient!!
 *
 * Lookup: Floyd's cycle detection algorithm
 */

const detectCycle2 = head => {
	let tortoise = head // 🐢
	let hare = head // 🐇

	while (hare && hare.next) {
		if (tortoise === hare) return true
		tortoise = tortoise.next
		hare = hare.next.next
	}

	return false
}
