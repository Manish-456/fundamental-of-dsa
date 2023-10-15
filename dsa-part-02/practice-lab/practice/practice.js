// Write a function that checks whether the given cordinates forms the st.line or not.
function checkStLine(coordinates) {
  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];

  let slope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i++) {
    let [x, y] = coordinates[i];
    if ((y - y1) / (x - x1) !== slope) {
      return false;
    }
  }
  return true;
}

//  let coordinates = [[1, 2], [2, 3], [4, 5], [5, 6]];

//  let result  = checkStLine(coordinates)
//  console.log(result);

//? All in One Shot

class Queue {
  constructor() {
    this.lists = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  enqueue(element) {
    this.lists[this.rear++] = element;
  }

  dequeue() {
    let item = this.lists[this.front];
    delete this.lists[this.front++];
    return item;
  }

  size() {
    return this.rear - this.front;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return !this.root;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }

    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }
  /*
   1. Create a queue
   2. Enqueue the root node
   3. As long as a node exists in the queue, perform the following operations
     - Dequeue the node from the front
     - Read the node's value
     - Enqueue the node's left child if it exists
     - Enqueue the node's right child if it exists
  */
  levelOrder(root) {
    const queue = new Queue();
    queue.enqueue(root);
    while (queue.size()) {
      const curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }

      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  minNode(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minNode(root.left);
    }
  }

  maxNode(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxNode(root.right);
    }
  }
  // todo : Add deletenode functionality
}

//  const bst = new BinarySearchTree();
//  bst.insert(10)
//  bst.insert(5)
//  bst.insert(15)
//  bst.insert(3)
//  bst.insert(4);
// //  console.log(bst.search(bst.root, 158));

// // //  console.log(bst)
// // bst.postOrder(bst.root)
// // bst.levelOrder(bst.root)
// console.log(bst.maxNode(bst.root));;

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameIndexKey = bucket.find((item) => item[0] === key);
      if (sameIndexKey) {
        sameIndexKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameIndexKey = bucket.find((item) => item[0] === key);
      if (sameIndexKey) {
        return sameIndexKey[1];
      }
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameIndexKey = bucket.find((item) => item[0] === key);
      if (sameIndexKey) {
        bucket.splice(bucket.indexOf(sameIndexKey), 1);
      }
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(i, this.table[i]);
    }
  }
}

class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head;
      let i = 0;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        i++;
        curr = curr.next;
      }
    }
    return -1;
  }

  insert(idx, value) {
    if (idx < 0 && idx > this.size) {
      return `Invalid index`;
    }
    if (idx === 0) {
      this.prepend(value);
    } else {
      const node = new LinkedNode(value);
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }

  remove(idx) {
    if (idx < 0 && idx > this.size) {
      return `Invalid index`;
    }

    let removedNode;
    if (idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
      }

      removedNode = curr.next;
      curr.next = removedNode.next;
    }

    return removedNode;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      let curr = this.head;
      let result = " ";
      while (curr) {
        result += `${curr.value}, `;
        curr = curr.next;
      }
      console.log(result);
    }
  }
}

class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromHead() {
    if (this.isEmpty()) {
      return `List is Empty`;
    }
    let removedNode;
    removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return removedNode;
  }

  removeFromTail() {
    if (this.isEmpty()) {
      return `List is Empty`;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }

      this.tail = prev;
      prev.next = null;
    }
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      let curr = this.head;
      let result = " ";
      while (curr) {
        result += `${curr.value}, `;
        curr = curr.next;
      }
      console.log(result);
    }
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length < 1;
  }

  getSize() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  print() {
    for (let item of this.items) {
      console.log(item);
    }
  }
}

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  isFull() {
    return this.capacity - this.size === 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.capacity - this.size;
  }

  enqueue(element) {
    if (this.isFull()) {
      return `Queue is already full`;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;

    if (this.front === -1) {
      this.front = this.rear;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return `Queue is empty`;
    } else {
      let item = this.items[this.front];
      delete this.items[this.front];
      this.front = (this.front + 1) % this.capacity;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      this.size--;
      return item;
    }
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  }
}

// ? Searching algorithm
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// ? O(n) => Worst case scenario : Linear time complexity

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return search(arr, target, mid + 1, end);
  } else {
    return search(arr, target, start, mid - 1);
  }
}

// bubbleSort(arr);
// let result = recursiveBinarySearch(arr, 50);
// console.log(result);

//? Sorting algorithm
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] > rightArr[0]) {
      sortedArr.push(rightArr.shift());
    } else {
      sortedArr.push(leftArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let numToSort = arr[i];
    while (j >= 0 && arr[j] > numToSort) {
      arr[j + 1] = arr[j];
      j --;
    }
    arr[j + 1] = numToSort;
  }
  return arr;
}

let arr = [10, 14, 28, 11];
let result = quickSort(arr);
console.log(result);

function quickSort(arr){
  if(arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
         if(arr[i] < pivot){
          leftArr.push(arr[i]);
         }else{
          rightArr.push(arr[i]);
         }
  };
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)] 
}