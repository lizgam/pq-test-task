class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if (!this.left){
			this.left = node;
			node.parent = this;
		}
		else if (!this.right) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.right === node) {
			this.right = null;
			node.parent = null;
		}
		else if (this.left === node) {
			this.left = null;
			node.parent = null;
		}
		else {
			throw "Error";
		}
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) {
			return;
		}
		let this_p = this.parent;
		let this_le = this.left;
		let this_re = this.right;

		if (this.parent.left === this) {
			if (this.parent.right) {
				this.parent.right.parent = this;
			}
			this.right = this.parent.right;
			this.left = this.parent;
		} else if (this.parent.right === this) {
			if (this.parent.left) {
				this.parent.left.parent = this;
			}
			this.right = this.parent;
			this.left = this.parent.left;
		}

		if (this.parent.parent) {
			if (this.parent.parent.left === this.parent) {
				this.parent.parent.left = this;
			} else if (this.parent.parent.right === this.parent) {
				this.parent.parent.right = this;
			}
		}

		if (this_le) {
			this_le.parent = this_p;
			// this_le.parent.left = this_le;
		}
		if (this_re) {
			this_re.parent = this_p;
			// this_re.parent.right = this_re;
		}
		this_p.left = this_le;
		this_p.right = this_re;
		this.parent = this.parent.parent;
		this_p.parent = this;
	}
}

module.exports = Node;
