const MaxHeap = require('./src/max-heap');
const Node= require('./src/node')
const PriorityQueue = require('./src/queue')
const Queue = require('./src/queue');


// const h = new MaxHeap();
// window.h = h;
// let h = new MaxHeap();
const q = new Queue();

const nodes = [
  { priority: 10, data: 1 },
  { priority: 20, data: 2 },
  { priority:  5, data: 3 },
  { priority:  0, data: 4 },
  { priority:  8, data: 5 },
  { priority: 12, data: 6 },
  { priority: 17, data: 7 },
  { priority: 15, data: 8 },
];

const expectedData = [2, 7, 8, 6, 1, 5, 3, 4]

nodes.forEach(node => q.push(node.data, node.priority));
q.shift();
q.shift();

//expectedData.forEach(d => expect(q.shift()).to.equal(d));



// const h = new MaxHeap();
// h.push(42, 15);
//

//
// h.pop();
//
// h.push(42, 15);
// h.push(14, 32);
// h.push(0, 0);
//
// const root = h.root;
// const left = h.root.left;
// const lastInsertedNode = h.root.right;
//
// const detached = h.detachRoot();
// h.restoreRootFromLastInsertedNode(detached);

// expect(h.parentNodes.indexOf(root)).to.equal(-1);
// expect(h.parentNodes[0]).to.equal(lastInsertedNode);
// expect(h.parentNodes[1]).to.equal(left);

// expect(h.root).to.equal(lastInsertedNode);
// expect(h.root.left).to.equal(left);
// expect(left.parent).to.equal(lastInsertedNode);
//
// //expect(h.size()).to.equal(0);
