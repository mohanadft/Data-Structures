"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BST_instances, _BST_insertUI, _BST_preOrderUI, _BST_inOrderUI, _BST_postOrderUI, _BST_searchUI, _BST_getMinUI, _BST_getMaxUI;
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(root) {
        _BST_instances.add(this);
        this.root = new TreeNode(root);
    }
    // Wrapper Method
    insert(data) {
        this.root = __classPrivateFieldGet(this, _BST_instances, "m", _BST_insertUI).call(this, this.root, data);
        return this.root;
    }
    deleteUI(root, data) {
        let p, q, s;
        if (!root) {
            console.error(`%cBST: %cCouldn't find the node with the value of %c${data} %cto delete.`, 'color: #0099ff; font-weight:700', `color: #FF2D2D`, 'color: yellow; font-style: italic;', 'color: #FF2D2D');
            return root;
        }
        else if (data < root.data) {
            root.left = this.deleteUI(root.left, data);
            return root;
        }
        else if (data > root.data) {
            root.right = this.deleteUI(root.right, data);
            return root;
        }
        else {
            q = root;
            s = root;
            if (!q.right)
                root = q.left;
            else if (!q.left)
                root = q.right;
            else {
                p = q.right;
                while (p) {
                    s = p;
                    p = p.left;
                }
                root = p;
                root.left = q.left;
                s.left = p.right;
                if (q.right == p)
                    root.right = p.right;
                else
                    root.right = q.right;
            }
            return root;
        }
    }
    delete(data) {
        this.root = this.deleteUI(this.root, data);
    }
    // Wrapper Method
    preOrder() {
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_preOrderUI).call(this, this.root);
    }
    // Wrapper Method
    inOrder() {
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_inOrderUI).call(this, this.root);
    }
    // Wrapper Method
    postOrder() {
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_postOrderUI).call(this, this.root);
    }
    includes(data) {
        return __classPrivateFieldGet(this, _BST_instances, "m", _BST_searchUI).call(this, this.root, data);
    }
    getMin() {
        return __classPrivateFieldGet(this, _BST_instances, "m", _BST_getMinUI).call(this, this.root);
    }
    getMax() {
        return __classPrivateFieldGet(this, _BST_instances, "m", _BST_getMaxUI).call(this, this.root);
    }
    remove(v) {
        if (!this.root)
            return false;
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (v < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (v > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (v === currentNode.value) {
                if (!currentNode.left && !currentNode.right) {
                    if (parentNode.left === currentNode) {
                        parentNode.left = null;
                        return true;
                    }
                    else {
                        parentNode.right = null;
                        return true;
                    }
                }
                if (currentNode.left === null && currentNode.right) {
                    if (parentNode.left === currentNode) {
                        let successor = currentNode.right;
                        let prevSuccessor = currentNode;
                        while (successor.left) {
                            prevSuccessor = successor;
                            successor = successor.left;
                        }
                        parentNode.left = successor;
                        prevSuccessor.left = null;
                        return true;
                    }
                    if (parentNode.right === currentNode) {
                        let successor = currentNode.right;
                        let prevSuccessor = currentNode;
                        while (successor.left) {
                            prevSuccessor = successor;
                            successor = successor.left;
                        }
                        parentNode.right = successor;
                        prevSuccessor.left = null;
                        return true;
                    }
                }
                if (currentNode.left && !currentNode.right) {
                    if (parentNode.left === currentNode) {
                        parentNode.left = currentNode.left;
                        return true;
                    }
                    if (parentNode.right === currentNode) {
                        parentNode.right = currentNode.left;
                        return true;
                    }
                }
                if (currentNode.left && currentNode.right) {
                    let leftNode = currentNode.left;
                    let rightNode = currentNode.right;
                    if (parentNode.left === currentNode) {
                        let successor = currentNode.right;
                        let prevSuccessor = currentNode;
                        while (successor.left) {
                            prevSuccessor = successor;
                            successor = successor.left;
                        }
                        if (!successor.right) {
                            parentNode.left = successor;
                            successor.left = leftNode;
                            successor.right = rightNode;
                            prevSuccessor.left = null;
                        }
                        else {
                            parentNode.left = successor;
                            prevSuccessor.left = successor.right;
                            successor.left = leftNode;
                            successor.right = rightNode;
                            prevSuccessor.left = null;
                        }
                        return true;
                    }
                    if (parentNode.right === currentNode) {
                        let successor = currentNode.right;
                        let prevSuccessor = currentNode;
                        while (successor.left) {
                            prevSuccessor = successor;
                            successor = successor.left;
                        }
                        if (!successor.right) {
                            parentNode.right = successor;
                            successor.left = leftNode;
                            prevSuccessor.left = null;
                        }
                        else {
                            parentNode.right = successor;
                            prevSuccessor.left = successor.right;
                            successor.left = leftNode;
                            successor.right = rightNode;
                        }
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
_BST_instances = new WeakSet(), _BST_insertUI = function _BST_insertUI(root, data) {
    if (root === null) {
        root = new TreeNode(data);
        return root;
    }
    else if (data < root.data) {
        root.left = __classPrivateFieldGet(this, _BST_instances, "m", _BST_insertUI).call(this, root.left, data);
        return root;
    }
    else if (data > root.data) {
        root.right = __classPrivateFieldGet(this, _BST_instances, "m", _BST_insertUI).call(this, root.right, data);
        return root;
    }
    else {
        console.error(`%cBST: %cThe value of %c${data} %ccannot be added, since it already exists.`, 'color: #0099ff; font-weight:700', `color: #FF2D2D`, 'color: yellow; font-style: italic;', 'color: #FF2D2D');
        return root;
    }
}, _BST_preOrderUI = function _BST_preOrderUI(root) {
    let N = root;
    if (N) {
        console.log(N.data);
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_preOrderUI).call(this, N.left);
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_preOrderUI).call(this, N.right);
    }
}, _BST_inOrderUI = function _BST_inOrderUI(root) {
    let N = root;
    if (N) {
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_inOrderUI).call(this, N.left);
        console.log(N.data);
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_inOrderUI).call(this, N.right);
    }
}, _BST_postOrderUI = function _BST_postOrderUI(root) {
    let N = root;
    if (N) {
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_postOrderUI).call(this, N.left);
        __classPrivateFieldGet(this, _BST_instances, "m", _BST_postOrderUI).call(this, N.right);
        console.log(N.data);
    }
}, _BST_searchUI = function _BST_searchUI(root, data) {
    if (root) {
        if (data > root.data)
            return __classPrivateFieldGet(this, _BST_instances, "m", _BST_searchUI).call(this, root.right, data);
        if (data < root.data)
            return __classPrivateFieldGet(this, _BST_instances, "m", _BST_searchUI).call(this, root.left, data);
        if (data === root.data)
            return true;
    }
    else
        return false;
}, _BST_getMinUI = function _BST_getMinUI(root) {
    if (root.left)
        return __classPrivateFieldGet(this, _BST_instances, "m", _BST_getMinUI).call(this, root.left);
    return root.data;
}, _BST_getMaxUI = function _BST_getMaxUI(root) {
    if (root.right)
        return __classPrivateFieldGet(this, _BST_instances, "m", _BST_getMaxUI).call(this, root.right);
    return root.data;
};
var _a, _BinaryTree_instances, _BinaryTree_root, _BinaryTree_preOrderUI, _BinaryTree_inOrderUI, _BinaryTree_postOrderUI;
class TreeNode {
    constructor(data) {
        this[_a] = function* depthFirst() {
            yield this.data;
            if (this.left)
                yield* this.left;
            if (this.right)
                yield* this.right;
        };
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
_a = Symbol.iterator;
class BinaryTree {
    constructor(root) {
        _BinaryTree_instances.add(this);
        _BinaryTree_root.set(this, null);
        this.root = root;
    }
    // Wrapper Method
    preOrder() {
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_preOrderUI).call(this, this.root);
    }
    // Wrapper Method
    inOrder() {
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_inOrderUI).call(this, this.root);
    }
    // Wrapper Method
    postOrder() {
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_postOrderUI).call(this, this.root, cb);
    }
    // Getters
    get root() {
        return __classPrivateFieldGet(this, _BinaryTree_root, "f");
    }
}
_BinaryTree_root = new WeakMap(), _BinaryTree_instances = new WeakSet(), _BinaryTree_preOrderUI = function _BinaryTree_preOrderUI(root, cb) {
    let N = root;
    if (N) {
        cb(N.data);
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_preOrderUI).call(this, N.left);
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_preOrderUI).call(this, N.right);
    }
}, _BinaryTree_inOrderUI = function _BinaryTree_inOrderUI(root) {
    let N = root;
    if (N) {
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_inOrderUI).call(this, N.left);
        console.log(N.data);
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_inOrderUI).call(this, N.right);
    }
}, _BinaryTree_postOrderUI = function _BinaryTree_postOrderUI(root) {
    let N = root;
    if (N) {
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_postOrderUI).call(this, N.left);
        __classPrivateFieldGet(this, _BinaryTree_instances, "m", _BinaryTree_postOrderUI).call(this, N.right);
        console.log(N.data);
    }
};
// Depth First Traversal === preOrder Traversal
const depthFirstTraversal = root => {
    if (!root)
        return;
    const stack = [root];
    while (stack.length > 0) {
        let current = stack.pop();
        if (current.right)
            stack.push(current.right);
        if (current.left)
            stack.push(current.left);
    }
    return values.join `, `;
};
// TODO: Breadth First Traversal === left to right level wise (Complete Binary Tree)
const BreadthFirstTraversal = root => {
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
    return values.join `, `;
};
/**
 * TODO: Given the root of a binary tree, invert the tree, and return its root.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invert = root => {
    if (root === null)
        return root;
    let left = invert(root.left);
    let right = invert(root.right);
    root.right = left;
    root.left = right;
    return root;
};
var _CompleteBinaryTree_size;
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class CompleteBinaryTree {
    constructor(root) {
        var _a;
        _CompleteBinaryTree_size.set(this, 0);
        this.root = root;
        if (root)
            __classPrivateFieldSet(this, _CompleteBinaryTree_size, (_a = __classPrivateFieldGet(this, _CompleteBinaryTree_size, "f"), _a++, _a), "f");
    }
    insert(data) {
        var _a;
        if (!this.root)
            this.root = new Node(data);
        let queue = [this.root];
        while (queue.length > 0) {
            let target = queue.shift();
            if (target) {
                if (!target.left) {
                    target.left = new Node(data);
                    return;
                }
                else if (!target.right) {
                    target.right = new Node(data);
                    return;
                }
                queue.push(target.left);
                queue.push(target.right);
            }
        }
        __classPrivateFieldSet(this, _CompleteBinaryTree_size, (_a = __classPrivateFieldGet(this, _CompleteBinaryTree_size, "f"), _a++, _a), "f");
    }
    BreadthFirstSearchTraversal() {
        if (!this.root)
            return;
        let values = [];
        let queue = [this.root];
        while (queue.length > 0) {
            let target = queue.shift();
            if (target) {
                values.push(target.data);
                queue.push(target.left);
                queue.push(target.right);
            }
        }
        return values.join `, `;
    }
    size() {
        return __classPrivateFieldGet(this, _CompleteBinaryTree_size, "f");
    }
}
_CompleteBinaryTree_size = new WeakMap();
const isCompleteBinaryTree = root => {
    let queue = [root];
    while (queue.length > 0) {
        let target = queue.shift();
        if (target) {
            if (!target.left && target.right)
                return false;
        }
    }
    return true;
};
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        if (node1 && node2 in this.adjacentList) {
            this.adjacentList[String(node1)].push(node2);
            this.adjacentList[String(node2)].push(node1);
        }
    }
    showConnections() {
        const vertecies = Object.keys(this.adjacentList);
        for (let vertex of vertecies) {
            console.log(`${vertex} => ${this.adjacentList[vertex].join(' ')}`);
        }
    }
}
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
class DuoubleList {
    constructor() {
        this.head = null;
        this. = 0;
    }
    insertFirst(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.++;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.++;
    }
    insertLast(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.++;
            return;
        }
        else if (!this.head.next) {
            this.head.next = newNode;
            newNode.prev = this.head;
            this.++;
            return;
        }
        let N = this.head;
        while (N.next)
            N = N.next;
        N.next = newNode;
        newNode.prev = N;
        this.++;
    }
    inserAtIndex(index, data) {
        if (!this.head || index > this.)
            return;
        if (!(index = +index && index > 0)) {
            // if the index "undefined" Or Zero or less than Zero this if will run.
            this.insertFirst(data);
            this.++;
            return;
        }
        if (index === this.) {
            this.insertLast(data);
            this.++;
            return;
        }
        let newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1 && current; i++)
            current = current.next;
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
        this.++;
    }
    removeFirst() {
        let temp = this.head.data;
        if (!this.head)
            return;
        if (!this.head.next) {
            this.head = null;
            this.--;
            return temp;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.--;
        return temp;
    }
    removeLast() {
        let target;
        if (!this.head)
            return;
        if (!this.head.next) {
            target = this.head.data;
            this.head = null;
            this.--;
            return target;
        }
        let current = this.head;
        while (current.next.next)
            current = current.next;
        target = current.next.data;
        current.next = null;
        this.--;
        return target;
    }
    removeAtIndex(index) {
        let target;
        if (!this.head || index >= this.)
            return;
        if (!(index == +index && index > 0)) {
            target = this.removeFirst();
            return target;
        }
        if (index === this. - 1) {
            target = this.removeLast();
            return target;
        }
        let current = this.head;
        for (let i = 0; i < index - 1 && current; i++)
            current = current.next;
        target = current.next.data;
        current.next.next.prev = current;
        current.next = current.next.next;
        this.--;
        return target;
    }
    print() {
        if (!this.head)
            return;
        let N = this.head;
        while (N) {
            console.log(N.data);
            N = N.next;
        }
    }
    get size() {
        return this.;
    }
}
//# sourceMappingURL=all.js.map