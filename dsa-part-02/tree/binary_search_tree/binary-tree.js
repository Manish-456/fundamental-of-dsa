// ? BINARY TREE

const Queue = require("../../queue/queue");

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

  search(root, value){
    if(!root){
      return false;
    }else{
      if(root.value === value){
        return true;
      }else if(root.value > value){
         return this.search(root.left, value);
      }else{
        return this.search(root.right, value);
      }
      
    }
  }

  //? TREE TRAVERSAL
/*
- Visiting every node in the tree
- A hierarchical data structure like a tree can be traversed in different ways
  - Depth First Search (DFS)
  - Breadth First Search (BFS)
*/

  // ? Depth First Search (DFS)
/*
- The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking

-  Visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree 

- Depending on the order in which we do this, there can be three types of DFS traversals

 - Preorder
 - Inorder
 - Postorder
*/

 // ? Preorder Traversal
 /*
  - Read the data of the node
  - Visit the left subtree
  - Visit the right subtree
 */

  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    
  }

  // ? inOrder Traversal
 /*
 - Visit the left subtree
  - Read the data of the node
  - Visit the right subtree
 */
  inOrder(root){
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // ? PostOrder Traversal
 /*
 - Visit the left subtree
  - Read the data of the node
  - Visit the right subtree
 */

  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // ? Breadth First Search (BFS)
  /*
  - Explore all nodes at the present depth prior to moving on to the nodes at the next depth level
  */

  // ? BFS Traversal Approach
  /*
   1. Create a queue
   2. Enqueue the root node
   3. As long as a node exists in the queue, perform the following operations
     - Dequeue the node from the front
     - Read the node's value
     - Enqueue the node's left child if it exists
     - Enqueue the node's right child if it exists
  */

     levelOrder(){
      const queue = new Queue();
      queue.enqueue(this.root);
      while(queue.size()){
        let curr = queue.dequeue();
        console.log(curr.value);
        if(curr.left){
          queue.enqueue(curr.left);
        }

        if(curr.right){
          queue.enqueue(curr.right);
        }
      }

     }

     min(root){
      if(!root.left){
        return root.value;
      }else{
       return this.min(root.left)
      }
     }

     max(root){
      if(!root.right){
        return root.value;
      }else{
       return this.max(root.right);
      }
     }

     delete(value){
      this.root = this.deleteNode(this.root, value);
     }

     deleteNode(root, value){
      if(!root){
        return root;
      }

      if(value < root.value){
        root.left = this.deleteNode(root.left, value);
      }else if (value > root.value){
        root.right = this.deleteNode(root.right, value);
      }else{
        if(!root.left && !root.right){
          return null;
        }
        if(!root.left){
          return root.right;
        }else if(!root.right){
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
     }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// console.log(bst.search(bst.root, 19));
// console.log(bst.postOrder(bst.root))
// bst.levelOrder()
// console.log(bst);;

bst.levelOrder();
bst.delete(10);
bst.levelOrder()


// 10
// 5    12
// 4 6