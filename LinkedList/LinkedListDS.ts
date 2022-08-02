export class ListNode<T> {
	data: T
	next: ListNode<T> | null

	constructor(data: T) {
		this.data = data
		this.next = null
	}
}

class LinkedList<T> {
	size: number
	head: ListNode<T> | null

	constructor() {
		this.head = null
		this.size = 0
	}

	insertFirst(data: T) {
		let newNode = new ListNode(data)

		if (!this.head) {
			this.head = newNode
			this.size++
			return
		}
		newNode.next = this.head
		this.head = newNode
		this.size++
	}

	insertLast(data: T) {
		let newNode = new ListNode(data)

		if (this.head === null) {
			this.head = newNode
			return
		}

		let current = this.head
		while (current.next) {
			current = current.next
		}

		current.next = newNode
		this.size++
	}

	insertAtIndex(index: number, data: T) {
		if (this.head === null || index > this.size) return

		if (index === 0) {
			this.insertFirst(data)
			return
		}

		if (index === this.size) {
			this.insertLast(data)
			this.size++
			return
		}

		let newNode = new ListNode(data)
		let current: ListNode<T> | null = this.head

		for (let i = 0; i < index - 1 && current; i++) current = current.next
		if (current) {
			newNode.next = current.next
			current.next = newNode
		}
		this.size++
	}

	removeFirst() {
		if (this.head === null) return
		let temp = this.head.data
		this.head = this.head.next
		this.size--
		return temp
	}

	removeLast() {
		if (this.head === null) return

		let curr: ListNode<T> | null = this.head
		while (curr?.next?.next) curr = curr.next
		if (curr && curr.next) {
			let temp = curr.next.data
			curr.next = null
			return temp
		}
		this.size--
	}

	removeAtIndex(index: number) {
		let target
		if (!this.head || index >= this.size) return
		if (index === 0) {
			target = this.removeFirst()
			return target
		}
		if (index === this.size - 1) {
			target = this.removeLast()
			return target
		}
		let current: ListNode<T> | null = this.head
		for (let i = 0; i < index - 1 && current; i++) current = current.next

		if (current && current.next) {
			target = current.next.data
			current.next = current.next.next
		}

		this.size--
		return target
	}

	indexOf(data: T) {
		let index = 0
		if (this.head === null) {
			return -1
		}

		let curr: ListNode<T> | null = this.head

		while (curr) {
			if (curr.data === data) {
				return index
			}
			index++
			curr = curr.next
		}
		return -1
	}

	elementAt(index: number) {
		if (!this.head) {
			return
		}
		let curr: ListNode<T> | null = this.head
		for (let i = 0; i < index && curr; i++) {
			curr = curr.next
		}
		return curr && curr.data
	}

	concat(list: LinkedList<T>) {
		if (this.head == null && list.head == null) {
			return null
		}

		let N1 = this.head,
			N2 = list.head
		if (N1) {
			while (N1.next) {
				N1 = N1.next
			}
			N1.next = N2
		}
		return this
	}

	reverse() {
		let N = this.head
		let newHead: ListNode<T> | null = null

		while (N) {
			if (newHead) {
				let newNode: ListNode<T> | null = new ListNode(N.data)
				newNode.next = newHead
				newHead = newNode
			} else {
				newHead = new ListNode(N.data)
			}
			N = N.next
		}
		this.head = newHead
	}

	clone() {
		let list = new LinkedList()
		if (!this.head) return list
		let N: ListNode<T> | null = this.head

		while (N) {
			list.insertLast(N.data)
			N = N.next
		}
		return list
	}

	print() {
		let N = this.head
		while (N) {
			console.log(N.data)
			N = N.next
		}
	}

	printReverse(head: ListNode<T> | null, cb = console.log) {
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

const moveLastElementToFront = <T>(list: LinkedList<T>) => {
	if (list.size === 0 || list.size === 1 || list.head === null) return list

	let N = list.head
	let N1 = list.head

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

const lengthIteratively = <T>(list: LinkedList<T>) => {
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
 * @param {ListNode} head
 * @returns number
 */

const lengthRecursively = <T>(head: ListNode<T> | null) => {
	if (head === null) return 0

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

const printMiddle = <T>(list: LinkedList<T>) => {
	if (list.head === null) return
	if (list.head.next === null) {
		console.log(list.head.data)
		return
	}
	let curr: ListNode<T> | null = list.head
	for (let i = 0; i < list.size / 2 - 1 && curr; i++) curr = curr.next

	if (curr) console.log(curr.data)
}

// TODO: check if a singly linked list is palindrome

/**
 *
 * @param {LinkedList} list
 * @returns boolean
 */

const isPalindrome2 = <T>(list: LinkedList<T>) => {
	let list2 = list.clone()
	list.reverse()

	let N1 = list.head
	let N2 = list2.head

	while (N1 && N2) {
		if (N1.data !== N2.data) return false
		N1 = N1.next
		N2 = N2.next
	}

	return true
}

// TODO: check if a singly linked list is palindrome

/**
 *
 * @param {ListNode} head
 * @returns boolean
 */

const isPalindrome = <T>(head: ListNode<T>) => {
	if (head === null || head.next === null) return true

	let curr: ListNode<T> | null = head
	let values = []

	while (curr) {
		values.push(curr.data)
		curr = curr.next
	}
	return values.join('') == values.reverse().join('')
}

// TODO: Reverse a single linked list

/**
 *
 * @param {LinkedList} list
 * @returns LinkedList
 */

const reverse = <T>(list: LinkedList<T>) => {
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
 * @param {ListNode<T>} node
 * @returns null
 */

const deleteNode = <T>(node: ListNode<T>) => {
	if (!node || !node.next) return false
	let next = node.next
	node.data = next.data
	node.next = next.next
	return true
}

/**
 *
 * @param {ListNode<T>} head
 * @param {T} value
 * @returns {boolean}
 */

// TODO: Find an element

const find = <T>(head: ListNode<T> | null, value: T): boolean => {
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
 * @param {ListNode<number>} l1
 * @param {ListNode<number>} l2
 * @return {ListNode<number>}
 */

const addTwoNumbers = (
	l1: ListNode<number>,
	l2: ListNode<number>
): ListNode<number> => {
	let [p1, p2]: [ListNode<number> | null, ListNode<number> | null] = [l1, l2]

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
			p2.next = new ListNode(0)
			p2 = p2.next
			i++
		}
	} else {
		let i = 0
		while (i < nOfNodesInTwo - nOfNodesInOne) {
			p1.next = new ListNode(0)
			p1 = p1.next
			i++
		}
	}

	p1 = l1
	p2 = l2

	while (p1 && p2) {
		let sum: number = p1.data + p2.data
		if (sum >= 10) {
			p1.data = sum % 10
			if (p1.next) {
				p1.next.data += ~~(sum / 10)
			} else {
				p1.next = new ListNode(~~(sum / 10))
			}
		} else {
			p1.data += p2.data
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = <T>(head: ListNode<T> | null, n: number) => {
	let p1 = head
	let p2 = head

	for (let i = 0; i < n && p2; i++) {
		if (p2.next === null) {
			if (i === n - 1 && head) head = head.next
		}
		p2 = p2.next
	}

	if (p2) {
		while (p2.next !== null && p1) {
			p1 = p1.next
			p2 = p2.next
		}
	}

	if (p1 && p1.next) {
		p1.next = p1.next.next
	}

	return head
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = (lists: ListNode<number>[]) => {
	if (lists.length === 0 || (lists.length === 1 && lists[0] === null))
		return null

	let values = lists
		.reduce((acc: number[], curr) => {
			let p: ListNode<number> | null = curr

			while (p) {
				acc.push(p.data)
				p = p.next
			}

			return acc
		}, [])
		.sort((a, b) => {
			return b - a
		})

	if (values.length) {
		let mergedList = new ListNode(values.pop())
		let p = mergedList

		while (values.length) {
			p.next = new ListNode(values.pop())
			p = p.next
		}
		return mergedList
	}

	return null
}
