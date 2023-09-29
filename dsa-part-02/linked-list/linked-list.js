// ? LINKEDLIST

/*
 - A linked list is a linear data structure that includes a series of connected nodes.

 - Each node consists of a data value and a pointer that points to the next node

 - The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.

 - Random access of elements is not feasible and accessing an element has linear time complexity

 The linked list data structure supports three main operations

  - Insertion - to add an element at the beginning, end or at a given index in the last 
  - Deletion - to remove an item given its index or value
  - Search- to find an element given its value
 */

// ? LINKED LIST USAGE

//* All applications of both stacks and queues are application of linked lists

//* Image Viewer

class Node {
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
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  // Append the new element at the start does not depend on the how many  element present there in the list => Prepend => O(1)
  prepend(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    // We have the while loop so time complexity is O(n)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.error(
        `Invalid index. Index should be in the range of 0 & ${this.size}`
      );
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  
  remove(idx){
    if(idx < 0 || idx >= this.size){
     console.error(`Removal Error: Invalid index. Index should be between the -1 & ${this.size + 1}`);
      return 
    }
    let removedNode;
    if(idx === 0){
     removedNode = this.head;
     this.head = this.head.next
   }else{
      let prev = this.head;
      for(let i = 0; i < idx - 1; i++){
        prev = prev.next
      }
      removedNode = prev.next;
      prev.next = removedNode.next
 
     }
     this.size --;
   }

   search(value){
    if(this.isEmpty()){
      return -1;
    }
      let i = 0;
      let curr = this.head;
      while(curr){
       if(curr.value === value){
        return i;
       }
       curr = curr.next;
       i++;
      }

      return -1;
   }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      let curr = this.head;
      let listValue = " ";
      while (curr) {
        listValue += `${curr.value}, `;
        curr = curr.next;
      }

      console.log(listValue);
    }
  }
}

let linked_list = new LinkedList();
linked_list.print();
linked_list.append(4);
linked_list.append(5);
linked_list.append(52);
linked_list.append(54);
linked_list.append(15);
linked_list.append(95);
linked_list.insert(6, 1);
linked_list.print();
console.log(linked_list.search(99));

