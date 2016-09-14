const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	push(data, priority) {
		 var node = new Node(data, priority);
		 this.insertNode(node);
		 this.shiftNodeUp(node);
		 this.count++;
	}

	pop() {
		this.count--;
	}

	detachRoot() {
		let detachedNode = this.root;
		let index = this.parentNodes.indexOf(this.root);
		this.root = null;

		if (index >= 0) {
			this.parentNodes.splice(index, 1);
		}
		return detachedNode;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.count;
	}

	isEmpty() {
		if (this.root === null && this.parentNodes.length === 0) {
			return true;
		}
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	insertNode(node) {
		if (this.root) {
			this.parentNodes[0].appendChild(node);
			if (this.parentNodes[0].left && this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
		}
		else {
			this.root = node;
		}
		this.parentNodes.push(node);
	}


	shiftNodeUp(node) {
		if (node.parent) {
			if (node.priority > node.parent.priority) {
				let nd_index = this.parentNodes.indexOf(node);
				let pr_index = this.parentNodes.indexOf(node.parent);
				if (nd_index >= 0) {
					this.parentNodes[nd_index] = node.parent;
				}
				if (pr_index >= 0) {
					this.parentNodes[pr_index] = node;
				}

				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		}
		else {
			this.root = node;
		}

	}

	shiftNodeDown(node) {
		if (node.left && node.priority < node.left.priority) {
		 	let nd_index = this.parentNodes.indexOf(node);
		 	let ch_index = this.parentNodes.indexOf(node.left);
			if (nd_index || ch_index) {
			 	if (nd_index >= 0) {
			 		this.parentNodes[nd_index] = node.left;
			 	}
			 	if (ch_index >= 0) {
			 		this.parentNodes[ch_index] = node;
			 	}
			}
			if (node == this.root) {
				this.root = node.left;
			}
			node.left.swapWithParent();
			this.shiftNodeDown(node);
		} else if (node.right && node.priority < node.right.priority) {
		 	let nd_index = this.parentNodes.indexOf(node);
		 	let ch_index = this.parentNodes.indexOf(node.right);
		 	if (nd_index >= 0) {
		 		this.parentNodes[nd_index] = node.right;
			}
		 	if (ch_index >= 0) {
		 		this.parentNodes[ch_index] = node;
		 	}
			if (node == this.root) {
				this.root = node.right;
			}

			node.right.swapWithParent();
			this.shiftNodeDown(node);
		}
	}
	
}

module.exports = MaxHeap;
