//? QUEUE

/*
- The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)

- The first element inserted into the queue is first element to be removed.

-A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/end).

- Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.

- The Queue data structure supports two main operations
  -- Enqueue, Which adds an element to the rear/tail of the collection
  -- Dequeue, Which removes an element from the front/head of the element
*/

//? Queue Usage

// Printers
// CPU task scheduling
// Callback queue in javaScript runtime

//? Queue Implementation

/* 
enqueue(element) - add an element to the queue

dequeue() - remove the oldest element from the queue

peek() - get the value of the element at the front of the queue without removing it.

isEmpty() - check if the queue is empty.

size() - get the number of elements in the queue.

print() - visualize the elements in the queue
*/

// * Using built-in Array methods
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   isEmpty(){
//     return this.items.length === 0;
//   }
//   enqueue(element){
//     this.items.push(element)
//   }
//   dequeue(){
//     return this.items.shift()
//   }
//   peek(){
//     return this.items[0]
//   }
//   size(){
//     return this.items.length;
//   }
//   print(){
//     console.log(this.items.toString())
//   }
// }

// * Without using built in Methods

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  enqueue(element) {
    this.items[this.rear++] = element;
  }
  dequeue() {
    let item = this.items[this.front];
    delete this.items[this.front++];
    return item;
  }
  peek(){
    return this.items[this.front];
  }
  size(){
    return this.rear - this.front;
  }

  print(){
    console.log(this.items);
  }
}

module.exports = Queue;

