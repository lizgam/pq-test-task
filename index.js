const MaxHeap = require('./src/max-heap');
const Node= require('./src/node')
const PriorityQueue = require('./src/queue')

// const h = new MaxHeap();
// window.h = h;


const h = new MaxHeap();


h.push(15, 42);
h.push(13, 0);


h.push(14, 100);


h.pop();
h.pop();


h.clear();
h.size();
//expect(h.size()).to.equal(0);
