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
    constructor(value){
        this.value = value;
        this.next = null; 
    }
  }

  class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }
      // Append the new element at the start does not depend on the how many  element present there in the list => Prepand => O(1)
    prepand(val){
        let node = new Node(val)
        if(this.isEmpty()){
         this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        
         this.size ++;
    }

    append(value){ // We have the while loop so time complexity is O(n)
        const node = new Node(value);
        if(this.isEmpty()){
          this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }         
            prev.next = node;
        }
        this.size ++;
    }

    print(){
        if(this.isEmpty()){
          console.log(`List is empty`);
        }else {
            let curr = this.head;
            let listValue = ' ';
            while(curr){
                listValue += `${curr.value}, `
                curr = curr.next;
            }
    
            console.log(listValue)   
        }
    }
  }

  let linked_list = new LinkedList();
  linked_list.print()
  linked_list.append(4)
  linked_list.append(5)
  linked_list.append(6)
   linked_list.print()
//   linked_list.prepand(5)

//   linked_list.prepand(25)
//   linked_list.prepand(30)
//   linked_list.prepand(35)
//   linked_list.prepand(40)
//   linked_list.print()