const MaxHeap = require('./src/max-heap');
const Node= require('./src/node')
const PriorityQueue = require('./src/queue')

// const h = new MaxHeap();
// window.h = h;
// let h = new MaxHeap();

const h = new MaxHeap();
h.push(42, 15);

// sinon.spy(h, 'detachRoot');

h.pop();

h.push(42, 15);
h.push(14, 32);
h.push(0, 0);

const root = h.root;
const left = h.root.left;
const lastInsertedNode = h.root.right;

const detached = h.detachRoot();
h.restoreRootFromLastInsertedNode(detached);

// expect(h.parentNodes.indexOf(root)).to.equal(-1);
// expect(h.parentNodes[0]).to.equal(lastInsertedNode);
// expect(h.parentNodes[1]).to.equal(left);

// expect(h.root).to.equal(lastInsertedNode);
// expect(h.root.left).to.equal(left);
// expect(left.parent).to.equal(lastInsertedNode);
//
// //expect(h.size()).to.equal(0);
