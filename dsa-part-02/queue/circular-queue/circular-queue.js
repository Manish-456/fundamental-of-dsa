// ? CIRCULAR QUEUE

/*
 - The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element

 - Also referred to as circular buffer or ring buffer and follows the FIFO principle

 - A circular queue will reuse the empty block created during the dequeue operation

 - When working with queues of fixed maximum size, a circular queue is a great implementation choice

 - The Circular Queue data structure supports two main operations
   - Enqueue, which adds an element to the rear/tail of the collection
   - Dequeue, which removes an element from the front/head of the collection

 */

// ? CIRCULAR QUEUE USAGE

/* 
- Clock
- Streaming data
- Traffic lights
*/

// ? IMPLEMENTATION OF CIRCULAR QUEUE DATA STRUCTURE

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() { // O(1)
    return this.currentLength === this.capacity; 
  }

  isEmpty() {   // O(1)
    return this.currentLength === 0;
  }

  enqueue(element) {   // O(1)
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {   // O(1)
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
    };
  }

  peek(){   // O(1)
    if(this.isEmpty()) return null;
    return this.items[this.front]
  }

  print(){   // O(N) => Printing the entire queue involves iterating through the elements in the queue where N is the number of elements in the queue at that moment.
    if(this.isEmpty()) {
        console.log("Queue is empty")
  }else{
    let i;
    let str = "";
    for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
        str += this.items[i] + " "
    }

    str += this.items[i]
    console.log(str);
  }
}
}

let c_queue = new CircularQueue(4);

c_queue.enqueue(30);
c_queue.enqueue(120);
c_queue.enqueue(420);
c_queue.enqueue(920);
c_queue.dequeue();
console.log(c_queue)
c_queue.print()