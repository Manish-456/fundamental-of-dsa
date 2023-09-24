// ? Stack
/*
The Stack data structure is a sequential collection of elements that follows the principle of Last in First Out (LIFO)

The last element inserted into the stack is first element to be removed.

A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.

Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.

The Stack data structure supports two main operations

 - Push, Which adds an element to the collection
 - Pop, which removes the most recently added element from the collection.

*/

// Stack Usage
/* 
Browser history tracking
Undo operation when typing
Expression conversions
Call stack in javascript runtime
*/

// Stack Implementation

/*
 Push(element) - add an element to the top of the stack

 Pop() - remove the top most element from the stack

 Peek() - get the value of the top element without removing it

 isEmpty() - check if the stack is empty;

 size() - get the number of elements in the stack

 print() - visualize the elements in the stack
*/

class Stack {
  constructor() {
    this.items = [];
  }

  peek() { // O(1)
    return this.items[this.items.length - 1];
  }

  isEmpty() { // O(1)
    return this.items.length < 1;
  }
  push(item) { // O(1)
    this.items.push(item);
  }
  pop() { // O(1)
    if(this.isEmpty()) return `Stack is empty`;
    return this.items.pop();  
  }
  size() { // O(1)
    return this.items.length;
  }
  print() {
    console.log(this.items); // O(n)
  }
}

const stack = new Stack();
stack.push(45)
stack.push(23)
stack.push(12)
stack.push(1)
stack.pop()
stack.pop()
stack.pop()
console.log(stack.print())

