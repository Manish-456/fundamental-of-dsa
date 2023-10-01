const LinkedList = require('./linked-list-with-tail.js');

class Queue {
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
      this.list.append(value);   
    }

    dequeue(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print()
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.enqueue(4))
console.log(queue.enqueue(5))
console.log(queue.enqueue(6))
queue.print()

