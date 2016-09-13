const MaxHeap = require('./src/max-heap');
const Node= require('./src/node')
const PriorityQueue = require('./src/queue')

const h = new MaxHeap();
window.h = h;


const p1 = new Node(1, 1);
const p2 = new Node(2, 2);
const p3 = new Node(3, 3);
const p4 = new Node(4, 4);
const p5 = new Node(5, 5);
const p6 = new Node(6, 6);
const p7 = new Node(7, 7);

p1.appendChild(p2);
p1.appendChild(p7);
p2.appendChild(p3);
p2.appendChild(p6);
p3.appendChild(p4);
p3.appendChild(p5);
p3.swapWithParent();
console.log(p3);
