const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		(maxSize) ? this.maxSize = maxSize : this.maxSize = 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		if (this.size() < this.maxSize) {
			this.heap.push(data, priority);
		}
		else {
			throw "Error";
		}
	}


	shift() {
		if (!this.isEmpty()) {
			let temp_node = this.heap.pop();
			return temp_node;
		}
		throw "Error";
		}



	size() {
		return this.heap.size() ;
	}

	isEmpty() {
		return this.heap.isEmpty();
	}

}

module.exports = PriorityQueue;
