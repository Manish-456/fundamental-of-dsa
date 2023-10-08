// ? BINARY TREE

/* A binary tree is a tree data structure in which each node has at most two children
  They are referred to as left child and right child
*/

// ? BINARY SEARCH TREE
/*
 A binary search tree is a binary tree that has the following two properties.
  - The value of each left node must be smaller than the parent node
  - The value of each right node must be greater than the parent node
  - Each node has at most two children
*/

// ? BINARY SEARCH TREE OPERATIONS
/*
 Insertion - To add a node to the tree
 Search - To find a node given its value
 DFS & BFS - To visit all nodes in the tree
 Deletion - To remove a node given its value
*/

//? BINARY SEARCH TREE USAGE
/*
 - Searching
 - Sorting
 - TO implement abstract data types such as lookup tables and priority queues
*/

// ? CODE IMPLEMENTATION

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
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(12)
bst.insert(6)
bst.insert(4)
console.log(bst);

// 10
// 5    12
// 4 6